import { NextResponse } from "next/server";
import { contactConfig } from "@/data/contact";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, businessName, serviceRequired, budgetRange, projectDescription } = data;

    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward form data to FormSubmit service to deliver directly to owner's inbox
    const response = await fetch(`https://formsubmit.co/ajax/${contactConfig.businessEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://nexovanta.studio",
        Origin: "https://nexovanta.studio",
      },
      body: JSON.stringify({
        "Client Name": name,
        "Business / Brand": businessName || "Not provided",
        "Client Email": email,
        "Service Required": serviceRequired || "General Inquiry",
        "Estimated Budget": budgetRange || "Not specified",
        "Project Description": projectDescription,
        _subject: `New Project Inquiry: ${businessName || name} - Nexovanta Studio`,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("FormSubmit service response error:", errText);
      return NextResponse.json(
        { success: false, message: "Failed to dispatch email automatically." },
        { status: 502 }
      );
    }

    const result = await response.json();
    const needsActivation = result?.message?.includes("needs Activation");

    return NextResponse.json({
      success: true,
      needsActivation,
      message: needsActivation
        ? "Form activation email sent to your inbox! Check victoryvijay2008@gmail.com and click 'Activate Form' once."
        : "Your project details have been sent directly to our email inbox!",
      result,
    });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
