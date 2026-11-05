import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  description?: string;
  budget?: string;
  type?: 'consulting' | 'development';
  honeypot?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // 1. Bot check: Honeypot trap
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Return 200 to trick spam bots without processing
      return NextResponse.json(
        { success: true, message: 'Inquiry received.' },
        { status: 200 }
      );
    }

    const { name, email, company, service, description, budget, type } = body;

    // 2. Validate required fields
    if (!name?.trim() || !email?.trim() || !service?.trim() || !description?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields (Name, Email, Service, Description).' },
        { status: 400 }
      );
    }

    // 3. Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid work email address.' },
        { status: 400 }
      );
    }

    // 4. Log inquiry for observability / operational logging
    const inquiryRecord = {
      timestamp: new Date().toISOString(),
      type: type || 'consulting',
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || 'N/A',
      service: service.trim(),
      budget: budget?.trim() || 'Unspecified',
      descriptionLength: description.trim().length,
      snippet: description.trim().slice(0, 160),
    };

    console.info('[Rebuild Labs Inquiry]', JSON.stringify(inquiryRecord, null, 2));

    // 5. Optional Webhook dispatch (e.g. Slack / Discord / Zapier) if configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🚀 **New Inquiry - Rebuild Labs**\n- **Type:** ${type}\n- **Name:** ${name}\n- **Email:** ${email}\n- **Company:** ${company || 'N/A'}\n- **Service:** ${service}\n- **Budget:** ${budget || 'N/A'}\n- **Details:** ${description}`,
          }),
        });
      } catch (err) {
        console.error('Failed to trigger contact webhook:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will get in touch within one business day.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while processing your request. Please email directly.' },
      { status: 500 }
    );
  }
}
