import React from 'react'
import TopRow from './LayoutComponents/TopRow'
import { Outlet } from 'react-router-dom'

function MasterLayout() {
  return (
    <div className="w-full">
     
      <TopRow />

      <div className='px-8 my-2'>
        <Outlet />
      </div>
    </div>
  );
}

export default MasterLayout