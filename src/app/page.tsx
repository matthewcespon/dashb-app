import { ArrowUpRight, Github } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import NavBar from '@/components/navbar'
import Footer from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-950">
      {/* Navigation bar with logo */}
      <NavBar visible="logo" />

      <div className="container mx-auto px-4 py-16 text-center">
        {/* Logo and Header */}
        <div className="mb-8">
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            A dashboard application built with Next.js, SpringBoot and Postgres.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 pt-[10vh]">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-800/50 text-neutral-200 hover:bg-neutral-700/50 transition-all backdrop-blur-sm border border-neutral-700/30"
          >
            <ArrowUpRight className="mr-2 h-5 w-5" />
            Get Started
          </Link>
          <Link
            href="https://github.com/matthewcespon/simple-crud"
            className="inline-flex items-center px-4 py-3 rounded-lg bg-neutral-800/50 text-neutral-200 hover:bg-neutral-700/50 transition-all backdrop-blur-sm border border-neutral-700/30"
            aria-label="View this project on GitHub"
          >
            <Github className="mr h-5 w-5" />
          </Link>
        </div>

        {/* Footer */}
        <Footer />

        {/* Features Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-lg bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/30">
              <h3 className="text-xl font-semibold text-white mb-4">
                Analytics
              </h3>
              <p className="text-neutral-300">
                Visualize your data with real-time charts and graphs. Monitor key metrics, identify trends, and make data-driven decisions with our comprehensive analytics dashboard.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/30">
              <h3 className="text-xl font-semibold text-white mb-4">
        User Management
              </h3>
              <p className="text-neutral-300">
        Easily manage user profiles, permissions, and access controls. Create custom roles, track user activity, and ensure secure authentication throughout your application.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/30">
              <h3 className="text-xl font-semibold text-white mb-4">
        Customizable Interface
              </h3>
              <p className="text-neutral-300">
        Personalize your dashboard with drag-and-drop widgets, dark/light mode themes, and responsive layouts that work on any device. Create the perfect workspace for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}