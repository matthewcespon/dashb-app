"use client"

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow">
        <h2 className="text-xl mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
            <p className="font-medium">John Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            <p className="font-medium">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}