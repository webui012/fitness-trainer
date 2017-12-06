import React from 'react'
import SalesItem from '../../SalesItem/SalesItem.js'

const Sales = props =>{
const salesHeadline = "Lorem";
const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie accumsan viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie accumsan viverra."
const expireDate = "01.01.2017"
const salesImgCaption = "Lorem"

  
return(
  <div>
    <SalesItem salesHeadline={salesHeadline} content={content} expireDate={expireDate} salesImgCaption={salesImgCaption}/>
    <SalesItem salesHeadline={salesHeadline} content={content} expireDate={expireDate} salesImgCaption={salesImgCaption}/>
    <SalesItem salesHeadline={salesHeadline} content={content} expireDate={expireDate} salesImgCaption={salesImgCaption}/>
  </div>
  )
}
export default Sales
