import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner} style={{backgroundImage: `url(${image})`}}>
			{/* <Image
				src={image}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
				alt="Movie banner"
			/> */}
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
