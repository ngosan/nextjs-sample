import { redirect } from 'next/navigation';


export async function createInvoice() {
'use server'
  redirect('/');
}

export default async function Page() {
  console.log("In Final page");
    return (
        <main>
    <form action={createInvoice}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">        
      <button className=
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600'>
        Submit Form to GO to Home Page</button>
      </div>
    </form>
        </main>
      );
}