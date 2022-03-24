import React, { useContext, useState } from "react"
import styles from './preview.module.scss'
import Skeleton from 'react-loading-skeleton'

const PreviewDemoSkeleton = () => {


  return <div className={`${styles.previewDemoSkeleton}`}>
    <div className={`${styles.previewRowDateDemo}`}>
      <div className={`${styles.previewDateDemo}`}><Skeleton height={18} /></div>
      <div>
        <Skeleton height={18} width={80} />
      </div>
    </div>
    <div className={`${styles.previewRowTitle}`}>
      <div className={`${styles.previewTitleDemo} w-100`}>
        <h3 className="w-100 mb-2"><Skeleton height={18} /></h3>
        <h3 className="w-100"><Skeleton height={18} /></h3>
      </div>
      <div className={`${styles.previewImgDemo}`}>
        <Skeleton width={60} height={45} />
      </div>
    </div>
    <div className={`d-flex`}>
      <div className={`w-100`}>
        <Skeleton height={18} />
      </div>
      <div className={`w-100 pl-2`}>
        <Skeleton height={18} />
      </div>
    </div>
    <div className={`${styles.previewDemoContent}`}>
      <div className="mb-1">
        <Skeleton height={16} />
      </div>
      <div>
        <Skeleton width={250} height={16} />
      </div>
    </div>
    <div className={`mt-2`}>
      <div>
        <Skeleton width={200} height={18}/>
      </div>
    </div>
  </div>
}

export default PreviewDemoSkeleton;
