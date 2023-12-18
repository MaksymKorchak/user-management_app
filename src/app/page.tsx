import AuthForm from "./auth-form"

export default function Home() {
  return (
      <main className="mx-auto max-w-xl p-5">
        <div>
          <h1 className="font-semibold text-3xl pb-10">Supabase Auth + Storage</h1>
          <p className="pb-10">
            Experience Auth and Storage through a simple profile management example. Create a user
            profile and upload an avatar image. Fast, simple, secure.
          </p>
        </div>
        <div>
          <AuthForm />
        </div>
      </main>
  )
};
