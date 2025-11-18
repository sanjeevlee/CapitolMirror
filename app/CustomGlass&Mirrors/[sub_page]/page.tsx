import FaturesPages2 from '@/components/Sub-pages2'
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
      <FaturesPages2 component={sub_page} />
    </>
  )
}
