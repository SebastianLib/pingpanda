import React from "react"
import { MaxWidthWrapper } from "../../components/max-width-wrapper"
import { Heading } from "../../components/heading"
import {Check} from "lucide-react"
import ShinyButton from "../../components/shiny-button"
import MockDiscordUI from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/discord-message"

export default function page() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time Saas Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PigPanda is the easiest way to monitor your SaaS. Get instant
              notifications for <span>sales, new users</span>
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-center sm:items-start">
              {[
                "Realtime Discord alers for critical events",
                "Buy once, use forever",
                "Realtime Discord alers for critical events",
                "Buy once, use forever",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700"/>
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton 
              href="/sign-up"
              className="relative z-10 h-14 w-full text-base shadow-lg
              transition-shadow duration-300 hover:shadow-xl">
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-25 pb-4">
          <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700"/>
          <div className="relative mx-auto">
            <MaxWidthWrapper className="relative">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset 
              ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 flex flex-col items-center">
                <MockDiscordUI>
                  <AnimatedList>
                    <DiscordMessage/>
                  </AnimatedList>
                </MockDiscordUI>
              </div>
            </MaxWidthWrapper>
          </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}
