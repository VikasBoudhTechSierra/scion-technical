import React from 'react'
import './TemporaryStaffingLists.css'
const TemporaryStaffingLists = ({subTitle, subPara}) => {
  return (
//    <ul>
//     <li>
<React.Fragment className="lists">
<span className='TemporaryStaffingLists-subTitle'>{subTitle}: </span>
<p className='TemporaryStaffingLists-subPara'>{subPara}</p>

</React.Fragment>
//     </li>
//    </ul>
  )
}

export default TemporaryStaffingLists