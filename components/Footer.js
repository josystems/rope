import React from "react";
import { Link as RLink } from "react-scroll";
import NLink from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className='bg-gray-900 pt-16 select-none'>
      <div>
        <div id='socialmedia' className='flex justify-center items-center'>
          <a
            target='_blank'
            href='https://fb.com/rope'
            class='mx-2 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#0088ff'
              class='bi bi-telegram'
              viewBox='0 0 16 16'>
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' />
            </svg>
          </a>
          <a
            target='_blank'
            href='https://fb.com/rope'
            class='mx-2 cursor-pointer'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='facebook-f'
              className='svg-inline--fa fa-facebook-f w-2.5'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'>
              <path
                fill='#3264ff'
                d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
            </svg>
          </a>
          <a target='_blank' className='mx-2 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='25px'
              role='img'
              height='25px'>
              <path
                fill='#03A9F4'
                d='M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429'
              />
            </svg>
          </a>
          <a target='_blank' className='mx-2 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='25px'
              height='25px'>
              <linearGradient
                id='PgB_UHa29h0TpFV_moJI9a'
                x1='9.816'
                x2='41.246'
                y1='9.871'
                y2='41.301'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0' stop-color='#f44f5a' />
                <stop offset='.443' stop-color='#ee3d4a' />
                <stop offset='1' stop-color='#e52030' />
              </linearGradient>
              <path
                fill='url(#PgB_UHa29h0TpFV_moJI9a)'
                d='M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z'
              />
              <path
                d='M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z'
                opacity='.05'
              />
              <path
                d='M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z'
                opacity='.07'
              />
              <path
                fill='#fff'
                d='M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z'
              />
            </svg>
          </a>
        </div>
        <div className='flex my-6 justify-center items-center'>
          {router?.pathname === "/" && (
            <RLink to='home' smooth={true}>
              <a className='mx-2 text-cyan-100 cursor-pointer tracking-wider p-2 hover:text-cyan-500 font-semibold '>
                Home
              </a>
            </RLink>
          )}
          {router?.pathname !== "/" && (
            <NLink href='/' prefetch key={"footer_home"}>
              <p className='mx-2 text-cyan-100 cursor-pointer tracking-wider p-2 hover:text-cyan-500 font-semibold '>
                Home
              </p>
            </NLink>
          )}
          <NLink href='/about' prefetch key={"footer_about"}>
            <p className='mx-2 text-cyan-100 cursor-pointer tracking-wider p-2 hover:text-cyan-500 font-semibold '>
              About
            </p>
          </NLink>
          <NLink href='/contact' prefetch key={"footer_contact"}>
            <p className='mx-2 text-cyan-100 cursor-pointer tracking-wider p-2 hover:text-cyan-500 font-semibold '>
              Contact
            </p>
          </NLink>
        </div>
        <p className='text-center font-thin font-mono bg-black/40 p-2 text-white'>
          &copy; 2022 copyright reserved
        </p>
      </div>
    </footer>
  );
}
