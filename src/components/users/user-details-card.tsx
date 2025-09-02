"use client";

import { motion } from "framer-motion";
import { User } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserDetailsCardProps {
  user: User;
}

export function UserDetailsCard({ user }: UserDetailsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
