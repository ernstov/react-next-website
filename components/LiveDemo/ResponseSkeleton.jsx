import React, {useState} from "react"
import styles from './preview.module.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ResponseSkeleton = () => {

  const [height, setHeight] = useState(22)

  return <div className={`${styles.responseSkeleton}`}>
    <SkeletonTheme color="#E9E3D4" highlightColor="#faf3e3">
      <div><Skeleton height={height} width={20} /></div>
      <div><Skeleton height={height} width={40} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-10"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-100"><Skeleton height={height} /></div>
      <div className="w-50"><Skeleton height={height} /></div>
      <div className="w-10"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-10"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div className="w-25"><Skeleton height={height} /></div>
      <div><Skeleton height={height} width={40} /></div>
      <div><Skeleton height={height} width={20} /></div>
    </SkeletonTheme>
  </div>
}

export default ResponseSkeleton;
