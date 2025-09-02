import { fetchUserById } from "@/lib/api";
import { UserDetailsCard } from "@/components/users/user-details-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UserDetailsPageProps {
  params: { id: string };
}

export default async function UserDetailsPage({ params }: UserDetailsPageProps) {
  const user = await fetchUserById(Number(params.id));

  return (
    <div className="space-y-6">
      <Link href="/" className="mb-6">
        <Button variant="outline">← Back to Users</Button>
      </Link>
      <UserDetailsCard user={user} />
    </div>
  );
}
