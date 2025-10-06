"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function ContactFormLEI() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <p className="text-sm mb-2">
                Get in touch with us
              </p>
              <h2>
                Need a Help? Get in touch with us!
              </h2>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    Ready for some coffee?
                  </h4>
                  <p className="text-base">
                    401 Broadway, 24th floor
                  </p>
                  <p className="text-base">Church View, London</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    Don&apos;t hesitate to reach out!
                  </h4>
                  <p className="text-base">Phone : 310-2568-4578</p>
                  <p className="text-base">Fax : 310-1298-4836</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">
                    How can we assist you?
                  </h4>
                  <p className="text-base">johndoe@gmail.com</p>
                  <p className="text-base">smithjohn@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-10">
            <h2 className="mb-8">
              Say hello!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground block"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name here..."
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground block"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email here..."
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-32 text-base resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Get Free Quote
              </Button>

              {/* Privacy Policy */}
              <p className="text-sm text-muted-foreground text-center">
                I understand that my data will be hold securely in accordance
                with the{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  privacy policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
