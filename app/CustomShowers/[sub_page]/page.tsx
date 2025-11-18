import SolutionPages1 from '@/components/Sub-pages1'
import React from 'react'

interface ParamTypes {
  params: Promise<{
    sub_page: string
  }>
}

export default async function SubMenuPage2({ params }: ParamTypes) {
  const { sub_page } = await params

  return (
    <>
      <SolutionPages1 component={sub_page} />
    </>
  )
}
