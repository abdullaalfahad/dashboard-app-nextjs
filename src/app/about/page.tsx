"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">About This Project</h1>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Dashboard Application</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This project is a <span className="font-semibold">Dashboard Application</span> built
            with <span className="font-semibold">Next.js 15</span>,{" "}
            <span className="font-semibold">TypeScript</span>, and{" "}
            <span className="font-semibold">shadcn/ui</span>. It demonstrates a production-ready
            setup with ESLint, Prettier, and modern UI practices.
          </p>
          <p>
            The app fetches user data from{" "}
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              JSONPlaceholder API
            </a>{" "}
            and provides the following features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>✅ User List Page with Search & Pagination</li>
            <li>✅ User Details Page with animated card</li>
            <li>✅ Responsive Design (mobile & desktop)</li>
            <li>✅ Framer Motion page transitions</li>
            <li>✅ Clean modular code with reusable hooks & components</li>
          </ul>
          <p>
            Additional animations and 3D elements can be integrated using{" "}
            <span className="font-semibold">Framer Motion</span> and{" "}
            <span className="font-semibold">Three.js</span> for an enhanced user experience.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
