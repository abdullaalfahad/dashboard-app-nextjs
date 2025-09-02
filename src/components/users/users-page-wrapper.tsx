"use client";

import { useUsers } from "@/hooks/use-users";
import { UsersTable } from "@/components/users/users-table";
import { Pagination } from "@/components/common/pagination";
import { Input } from "@/components/ui/input";

export default function UsersPageWrapper() {
  const { users, loading, error, search, setSearch, page, setPage, totalPages } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      {/* Search */}
      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      {/* Table */}
      <UsersTable users={users} />

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
