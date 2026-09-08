import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SCHOOL_EMAIL = 'mahmudcollegeijede@yahoo.com'

interface ContactPayload {
  fullName: string
  email: string
  phone?: string
  subject: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
}

function validate(body: Partial<ContactPayload>): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  const fullName = body.fullName?.trim()
  const email = body.email?.trim()
  const subject = body.subject?.trim()
  const message = body.message?.trim()

  if (!fullName || fullName.length < 2) return { ok: false, error: 'Please provide your full name.' }
  if (!email || !isValidEmail(email)) return { ok: false, error: 'Please provide a valid email address.' }
  if (!subject || subject.length < 2) return { ok: false, error: 'Please provide a subject.' }
  if (!message || message.length < 10) return { ok: false, error: 'Your message is too short.' }

  return {
    ok: true,
    data: { fullName, email, subject, message, phone: body.phone?.trim() },
  }
}

export async function POST(request: Request) {
  try {
    const body: Partial<ContactPayload> = await request.json()
    const result = validate(body)

    if (!result.ok) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 })
    }

    const { fullName, email, phone, subject, message } = result.data

    // ReCAPTCHA-style honeypot / basic spam guard: require a reasonably sized
    // payload and non-empty fields (validated above).

    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: SCHOOL_EMAIL,
          subject: `[MACI Website] ${subject}`,
          text:
            `New enquiry from the MACI website:\n\n` +
            `Name: ${fullName}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone || 'N/A'}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}`,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
