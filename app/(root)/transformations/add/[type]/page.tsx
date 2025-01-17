// import Header from '@/components/shared/Header'
// import TransformationForm from '@/components/shared/TransformationForm';
// import { transformationTypes } from '@/constants'
// import { getUserById } from '@/lib/actions/user.actions';
// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import { NextResponse } from 'next/server';

// const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
//   const {userId} = await  auth();
//   if(!userId){
//     return NextResponse.json({error: "Unauthorized"}, {status: 401});
// }
//   const transformation = transformationTypes[type];

//   if(!userId) redirect('/sign-in')

//   const user = await getUserById(userId);

//   return (
//     <>
//       <Header 
//         title={transformation.title}
//         subtitle={transformation.subTitle}
//       />
    
//       <section className="mt-10">
//         <TransformationForm 
//           action="Add"
//           userId={user._id}
//           type={transformation.type as TransformationTypeKey}
//           creditBalance={user.creditBalance}
//         />
//       </section>
//     </>
//   )
// }

// export default AddTransformationTypePage

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page