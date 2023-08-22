import nav from '@/assets/json'
import { GetNavData } from '@/utils'
import React, { useEffect, useState } from 'react'

const Menus: React.FC<BM.MenusProps> = props => {
	const [navData, setNavData] = useState<Array<BM.NavItem>>([])
	const [active, setActive] = useState<number>(0)

	useEffect(() => setNavData(GetNavData()), [])
	useEffect(() => {
		const itemsData = nav[active].nav
		props.setItemData([])
		setTimeout(() => {
			props.setItemData(itemsData)
		}, 0)
	}, [active])

	return (
		<>
			<ul className='beautyScroll BM-w-full BM-flex-1 BM-overflow-y-auto BM-overflow-x-hidden BM-py-20 BM-pl-2em'>
				{navData.map((item, index) => {
					return (
						<li className='BM-mb-[0.5em]' onClick={() => setActive(index)} key={index}>
							<span className='BM-relative BM-z-10 BM-flex BM-h-full BM-items-center'>
								<img src={item.icon} className='BM-mr-[1em] BM-h-32 BM-w-32 BM-object-cover' alt='' />
								{item.label}
							</span>
							<svg fill='none' width='268' height='132' viewBox='0 0 268 132' style={{ display: active === index ? 'block' : 'none' }}>
								<path
									d='M250.756,26.1818Q251.179,26.1818,251.602,26.1503Q252.025,26.1187,252.446,26.0557Q252.867,25.9927,253.286,25.8984Q253.705,25.8041,254.12,25.6787Q254.535,25.5533,254.946,25.3972Q255.357,25.241,255.762,25.0544Q256.167,24.8679,256.565,24.6513Q256.964,24.4348,257.355,24.1888Q257.746,23.9429,258.129,23.6681Q258.511,23.3933,258.885,23.0903Q259.258,22.7873,259.621,22.4569Q259.984,22.1265,260.336,21.7694Q260.688,21.4123,261.028,21.0294Q261.368,20.6466,261.695,20.2388Q262.023,19.8311,262.336,19.3994Q262.65,18.9678,262.949,18.5133Q263.249,18.0589,263.533,17.5826Q263.817,17.1064,264.086,16.6096Q264.354,16.1127,264.606,15.5965Q264.859,15.0802,265.094,14.5458Q265.329,14.0114,265.547,13.4601Q265.764,12.9089,265.964,12.342Q266.163,11.7752,266.344,11.1942Q266.525,10.6131,266.687,10.0193Q266.849,9.42554,266.992,8.82038Q267.135,8.21523,267.257,7.60018Q267.38,6.98512,267.483,6.36166Q267.586,5.73819,267.669,5.10782Q267.751,4.47744,267.813,3.84167Q267.875,3.2059,267.917,2.56626Q267.958,1.92663,267.979,1.28468Q268,0.642724,268,-0.0000038147L268,132Q268,131.374,267.98,130.749Q267.961,130.124,267.921,129.502Q267.882,128.879,267.823,128.26Q267.764,127.64,267.686,127.026Q267.608,126.412,267.51,125.804Q267.413,125.196,267.296,124.596Q267.18,123.996,267.044,123.405Q266.909,122.814,266.755,122.233Q266.602,121.653,266.43,121.084Q266.258,120.515,266.068,119.96Q265.879,119.404,265.672,118.863Q265.465,118.322,265.242,117.796Q265.018,117.271,264.778,116.762Q264.539,116.253,264.283,115.762Q264.027,115.271,263.757,114.8Q263.486,114.328,263.201,113.876Q262.916,113.425,262.616,112.995Q262.317,112.564,262.005,112.156Q261.693,111.748,261.368,111.363Q261.043,110.978,260.706,110.617Q260.37,110.256,260.022,109.92Q259.675,109.583,259.317,109.273Q258.959,108.962,258.592,108.678Q258.225,108.394,257.85,108.136Q257.474,107.879,257.091,107.649Q256.708,107.419,256.317,107.217Q255.927,107.015,255.531,106.842Q255.136,106.669,254.735,106.525Q254.334,106.38,253.929,106.265Q253.524,106.15,253.115,106.064Q252.707,105.979,252.297,105.923Q251.886,105.867,251.475,105.841L251.475,105.818L39.8182,105.818C17.8272,105.818,0,87.991,0,66C0,44.009,17.8272,26.1818,39.8182,26.1818L250.756,26.1818L250.756,26.1818Z'
									className='BM-fill-1f dark:BM-fill-dark1f'
								/>
							</svg>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default Menus
