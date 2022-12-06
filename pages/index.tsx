import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Content from '../components/content'
import Navbar from '../components/navbar'
import About from './about'
import ModalQR from '../components/modalQR'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// import { useDarkMode } from 'usehooks-ts'


// import { watch } from 'fs'



export default function Home() {
  // const { isDarkMode, toggle, enable, disable } = useDarkMode()
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [qrCode, setQRCode] = useState(false)
  const [tab, setTab] = useState('servers')
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // document.querySelector("html")?.classList.add(darkMode)
    document.querySelector('body')?.classList.add('overflow-y-scroll', 'bg-[#F8F8F8]', 'dark:bg-[#141414]', 'text-[#212121]')
    setHasMounted(true)
    console.log(isDarkMode)
    // setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')))
  }, [])

  const handleDark = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) setTheme('light')
    else setTheme('dark')
    window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Shadowmere</title>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any"/>
      </Head>
      
      {/* <Navbar tabActive={handleTab} /> */}
      <nav className="w-full h-20 z-50 top-0 fixed  flex justify-center bg-white dark:bg-[#212121] text-sm 2xl:text-base transition-transform shadow-lg">
        <div className="nav-wrapper container mx-auto dark:bg-[#212121] w-full h-full flex items-center justify-between px-4">
          <svg className="fill-[#303030] dark:fill-[#cfcfcf] w-[200px] h-auto cursor-pointer" width="260" height="50" viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9424 4.88982L23.7489 0.941338L28.491 1.11554L34.5105 1.3478L25.607 4.46401L20.9424 4.88982Z" />
            <path d="M28.7812 7.19311L33.4265 4.69627L41.9235 8.00603L31.2781 9.12864L28.7812 7.19311Z" />
            <path d="M35.8459 12.7868L40.9945 12.361L48.1366 19.7934L39.4073 16.2514L35.8459 12.7868Z" />
            <path d="M41.6914 21.1096L44.827 21.8838L48.3496 28.1743L43.1818 24.1871L41.6914 21.1096Z" />
            <path d="M43.0269 29.8775L45.1947 31.5808L46.4334 35.5486L44.1301 32.955L43.0269 29.8775Z" />
            <path d="M39.5429 22.2709L27.4071 7.98667L18.0585 6.30276L19.0456 1.77362L16.0069 4.23174L9.01958 9.8835L0 29.2969L0.270974 30.7485L0.929055 30.8647L2.53555 33.3034L4.8969 32.8776L8.63247 29.084L18.7553 24.9806L18.2134 19.7934L19.8973 25.0968L15.0391 32.0066L11.7293 41.7424L17.9037 45.4199L20.0908 46.0199L21.0392 47.278L23.9812 49.02L43.2979 37.8519L39.5429 22.2709ZM13.5874 14.4901L11.9229 16.9095L10.3357 17.6837L11.3035 15.5159L11.9616 14.5094L13.2003 13.9675L14.4778 12.9416L13.5874 14.4901Z" />
            <path d="M12.9101 3.22527L11.323 2.91558L11.2068 4.6382L9.36808 4.11561L9.29066 5.39306L3.9873 4.59949L9.15517 7.65763L14.2843 3.43817L14.3618 0.941338L12.9101 3.22527Z" />
            <path d="M67.8598 18.0127C67.705 18.245 67.5695 18.4192 67.4147 18.5353C67.2598 18.6515 67.0663 18.6902 66.834 18.6902C66.6017 18.6902 66.3501 18.6127 66.0985 18.4579C65.8275 18.3031 65.5178 18.1289 65.1694 17.9353C64.821 17.7418 64.4146 17.5676 63.9501 17.4127C63.4855 17.2579 62.9629 17.1805 62.3436 17.1805C61.2597 17.1805 60.4467 17.4127 59.9048 17.916C59.3628 18.4192 59.0919 19.0386 59.0919 19.8128C59.0919 20.316 59.2467 20.7225 59.537 21.0515C59.8274 21.3806 60.2145 21.6709 60.6984 21.9031C61.1822 22.1354 61.7242 22.3483 62.3436 22.5419C62.9629 22.7354 63.5823 22.929 64.221 23.1612C64.8598 23.3935 65.4985 23.6451 66.0985 23.9548C66.7179 24.2645 67.2598 24.6322 67.7437 25.0968C68.2276 25.5613 68.6147 26.1226 68.905 26.7807C69.1953 27.4388 69.3502 28.2517 69.3502 29.1808C69.3502 30.2066 69.176 31.1743 68.8082 32.0647C68.4405 32.955 67.9372 33.7486 67.2598 34.426C66.5824 35.1035 65.7501 35.6261 64.763 36.0132C63.7759 36.4003 62.6532 36.5938 61.3951 36.5938C60.679 36.5938 59.9629 36.5164 59.2467 36.3809C58.5306 36.2454 57.8531 36.0325 57.195 35.7809C56.537 35.5293 55.9176 35.2196 55.3369 34.8519C54.7563 34.4841 54.253 34.0776 53.8079 33.6325L55.1821 31.426C55.2982 31.2518 55.4531 31.1163 55.6273 31.0195C55.8208 30.9034 56.0144 30.8647 56.2273 30.8647C56.5176 30.8647 56.8079 30.9614 57.1176 31.1743C57.4273 31.3873 57.7951 31.6195 58.2015 31.8518C58.608 32.1034 59.0725 32.3357 59.6145 32.5292C60.1564 32.7228 60.7951 32.8389 61.5306 32.8389C62.6145 32.8389 63.4662 32.5873 64.0662 32.084C64.6662 31.5808 64.9565 30.8453 64.9565 29.8582C64.9565 29.2969 64.8017 28.8324 64.5114 28.4646C64.221 28.1162 63.8339 27.8259 63.35 27.5743C62.8662 27.342 62.3242 27.1291 61.7048 26.9549C61.0855 26.7807 60.4661 26.5871 59.8274 26.3936C59.1886 26.1807 58.5499 25.9291 57.9499 25.6387C57.3305 25.3484 56.7886 24.9613 56.3047 24.4774C55.8208 23.9935 55.4337 23.4129 55.1434 22.6967C54.853 21.9806 54.6982 21.1096 54.6982 20.0644C54.6982 19.2128 54.8724 18.3998 55.2014 17.6256C55.5305 16.8321 56.0144 16.1353 56.6725 15.5159C57.3112 14.8965 58.1047 14.4126 59.0532 14.0255C60.0016 13.6384 61.0661 13.4642 62.2855 13.4642C63.6404 13.4642 64.8985 13.6771 66.0598 14.103C67.2211 14.5288 68.1889 15.1094 69.0018 15.8643L67.8598 18.0127Z" />
            <path d="M89.654 13.6965V36.3229H84.9506V26.5871H74.9826V36.3229H70.2793V13.6965H74.9826V23.2967H84.9506V13.6965H89.654Z" />
            <path d="M111.7 36.3035H108.061C107.654 36.3035 107.325 36.2067 107.074 36.0132C106.822 35.8196 106.629 35.568 106.512 35.2777L104.983 30.9614H95.9831L94.4541 35.2777C94.3573 35.5293 94.1637 35.7809 93.9121 35.9938C93.6605 36.2067 93.3315 36.3229 92.925 36.3229H89.2668L98.1122 13.6965H102.893L111.7 36.3035ZM103.841 27.7097L101.403 20.7805C101.248 20.4128 101.112 19.987 100.938 19.5031C100.783 19.0192 100.628 18.4773 100.474 17.916C100.319 18.4966 100.183 19.0386 100.009 19.5224C99.8542 20.0063 99.6994 20.4515 99.5445 20.7999L97.1057 27.6904H103.841V27.7097Z" />
            <path d="M131.578 24.9806C131.578 26.6258 131.307 28.1549 130.745 29.5485C130.184 30.9421 129.41 32.1228 128.384 33.1292C127.377 34.1164 126.158 34.9099 124.726 35.4712C123.294 36.0325 121.726 36.3035 119.984 36.3035H111.293V13.6965H120.003C121.745 13.6965 123.313 13.9868 124.745 14.5481C126.177 15.1094 127.397 15.8836 128.403 16.8901C129.41 17.8966 130.203 19.0773 130.765 20.4709C131.326 21.8644 131.578 23.3548 131.578 24.9806ZM126.777 24.9806C126.777 23.8 126.623 22.7354 126.313 21.787C126.003 20.8386 125.558 20.045 124.977 19.387C124.397 18.7289 123.681 18.2256 122.848 17.8772C122.016 17.5288 121.048 17.3546 120.003 17.3546H116.016V32.6453H120.003C121.068 32.6453 122.016 32.4712 122.848 32.1228C123.681 31.7744 124.397 31.2711 124.977 30.613C125.558 29.955 126.003 29.142 126.313 28.213C126.623 27.2839 126.777 26.1807 126.777 24.9806Z" />
            <path d="M154.378 24.9806C154.378 26.6258 154.107 28.1743 153.546 29.5872C152.985 31.0001 152.21 32.2195 151.184 33.2454C150.178 34.2712 148.959 35.0841 147.526 35.6648C146.094 36.2454 144.526 36.5551 142.784 36.5551C141.042 36.5551 139.475 36.2648 138.042 35.6648C136.61 35.0841 135.391 34.2712 134.384 33.2454C133.358 32.2195 132.584 31.0001 132.023 29.5872C131.461 28.1743 131.19 26.6452 131.19 24.9806C131.19 23.3161 131.461 21.8064 132.023 20.3934C132.584 18.9805 133.358 17.7611 134.384 16.7353C135.41 15.7094 136.629 14.8965 138.042 14.3159C139.475 13.7352 141.042 13.4255 142.784 13.4255C144.526 13.4255 146.094 13.7158 147.526 14.3159C148.959 14.8965 150.159 15.7094 151.184 16.7546C152.191 17.7805 152.985 19.0192 153.546 20.4128C154.107 21.8064 154.378 23.3548 154.378 24.9806ZM149.597 24.9806C149.597 23.8 149.443 22.7354 149.133 21.787C148.823 20.8386 148.378 20.045 147.778 19.387C147.197 18.7289 146.481 18.2256 145.649 17.8772C144.817 17.5288 143.868 17.3546 142.804 17.3546C141.739 17.3546 140.791 17.5288 139.958 17.8772C139.107 18.2256 138.41 18.7289 137.81 19.387C137.21 20.045 136.765 20.8386 136.455 21.787C136.145 22.7354 135.991 23.7806 135.991 24.9806C135.991 26.1807 136.145 27.2452 136.455 28.1936C136.765 29.142 137.21 29.9356 137.81 30.5937C138.391 31.2518 139.107 31.755 139.958 32.1034C140.791 32.4518 141.758 32.626 142.804 32.626C143.868 32.626 144.817 32.4518 145.649 32.1034C146.481 31.755 147.197 31.2518 147.778 30.5937C148.359 29.9356 148.823 29.142 149.133 28.1936C149.443 27.2452 149.597 26.1807 149.597 24.9806Z" />
            <path d="M185.23 13.6965L178.224 36.3229H174.004L169.378 21.5354C169.301 21.3225 169.224 21.0902 169.166 20.858C169.088 20.6063 169.03 20.3354 168.972 20.0644C168.914 20.3354 168.837 20.6063 168.778 20.858C168.72 21.1096 168.624 21.3418 168.566 21.5354L163.882 36.3229H159.643L152.597 13.6965H156.527C156.933 13.6965 157.281 13.7933 157.552 13.9868C157.823 14.1804 157.998 14.432 158.094 14.7417L161.598 27.4968C161.675 27.8452 161.772 28.2323 161.849 28.6388C161.946 29.0453 162.023 29.4904 162.101 29.9356C162.198 29.4711 162.294 29.0259 162.391 28.6194C162.488 28.213 162.604 27.8259 162.74 27.4775L166.824 14.7223C166.901 14.4707 167.095 14.2191 167.366 14.0062C167.636 13.7933 167.985 13.6771 168.372 13.6771H169.746C170.153 13.6771 170.482 13.7739 170.733 13.9675C170.985 14.161 171.179 14.4126 171.295 14.703L175.359 27.4581C175.475 27.7872 175.592 28.1549 175.708 28.542C175.824 28.9291 175.901 29.3549 175.998 29.7808C176.075 29.3356 176.153 28.9291 176.23 28.542C176.308 28.1549 176.385 27.7872 176.463 27.4581L180.005 14.7223C180.082 14.4514 180.256 14.2191 180.527 14.0062C180.798 13.7933 181.147 13.6965 181.534 13.6965H185.23Z" />
            <path d="M210.218 13.6965V36.3229H206.096V22.4257C206.096 22.1354 206.096 21.8257 206.115 21.4967C206.134 21.1676 206.154 20.8193 206.192 20.4902L199.728 32.7615C199.379 33.4389 198.837 33.768 198.082 33.768H197.424C197.057 33.768 196.747 33.6905 196.457 33.5163C196.166 33.3421 195.953 33.0905 195.779 32.7615L189.276 20.4515C189.315 20.8193 189.334 21.1676 189.353 21.4967C189.373 21.8257 189.392 22.1548 189.392 22.4451V36.3422H185.269V13.6965H188.831C189.024 13.6965 189.198 13.6965 189.353 13.7158C189.508 13.7352 189.644 13.7546 189.76 13.7933C189.876 13.832 189.992 13.9094 190.089 14.0062C190.186 14.103 190.282 14.2384 190.379 14.4126L196.708 26.471C196.902 26.8388 197.095 27.2065 197.27 27.5936C197.444 27.9807 197.599 28.3678 197.753 28.7743C197.908 28.3678 198.083 27.9614 198.237 27.5549C198.412 27.1678 198.586 26.7807 198.799 26.4129L205.089 14.3933C205.186 14.2191 205.283 14.0836 205.379 13.9868C205.476 13.89 205.592 13.8126 205.708 13.7739C205.825 13.7352 205.96 13.6965 206.115 13.6965C206.27 13.6965 206.444 13.6771 206.657 13.6771H210.218V13.6965Z" />
            <path d="M217.147 17.3546V23.1612H224.696V26.7033H217.147V32.6453H226.844V36.3035H212.444V13.6965H226.844V17.3546H217.147Z" />
            <path d="M245.871 36.3035H241.651C240.858 36.3035 240.296 35.9938 239.929 35.3938L235.632 28.4646C235.458 28.1936 235.264 28.0001 235.051 27.8646C234.838 27.7291 234.528 27.671 234.103 27.671H232.516V36.2842H227.832V13.6965H234.935C236.522 13.6965 237.858 13.8513 238.98 14.1804C240.103 14.5094 241.032 14.9546 241.748 15.5546C242.464 16.1353 242.987 16.8321 243.316 17.6256C243.645 18.4385 243.819 19.3095 243.819 20.2773C243.819 21.0322 243.703 21.729 243.49 22.4064C243.277 23.0838 242.967 23.6838 242.561 24.2451C242.154 24.8064 241.651 25.2903 241.071 25.7161C240.471 26.142 239.812 26.4904 239.038 26.742C239.348 26.9162 239.619 27.1097 239.89 27.342C240.142 27.5743 240.374 27.8452 240.587 28.1743L245.871 36.3035ZM234.916 24.4C235.67 24.4 236.329 24.3032 236.87 24.1097C237.412 23.9161 237.877 23.6451 238.225 23.3161C238.574 22.987 238.845 22.5806 239 22.1161C239.174 21.6515 239.251 21.1676 239.251 20.6257C239.251 19.5612 238.903 18.7289 238.187 18.1289C237.47 17.5288 236.387 17.2385 234.935 17.2385H232.496V24.4H234.916V24.4Z" />
            <path d="M250.303 17.3546V23.1612H257.852V26.7033H250.303V32.6453H260V36.3035H245.6V13.6965H260V17.3546H250.303Z" />
          </svg>

          <div className="nav-content flex w-auto h-full items-center flex-row-reverse gap-6 mx-0">

            <button className="mobile-menu w-6 h-6 flex items-center justify-center xl:hidden">
              <svg className="icon-menu w-8 h-8 fill-[#303030] dark:fill-[#cfcfcf]" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.667H21V16.667H3V18.667ZM3 13.667H21V11.667H3V13.667ZM3 6.66699V8.66699H21V6.66699H3Z" />
              </svg>
              <svg className="icon-close fill-[#303030] dark:fill-[#cfcfcf]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" />
              </svg>
            </button>

            <button className="button-fork w-auto h-12 hidden xl:flex gap-2 items-center justify-center px-5 rounded-md bg-[#303030] hover:bg-[#444444] active:bg-[#303030] dark:bg-[#cfcfcf] dark:hover:bg-[#bfbfbf] dark:active:bg-white dark:transition-colors text-white">
              <svg className="fill-white dark:fill-[#303030]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_509_459)">
                  <path d="M7.77656 18.6281C7.77656 18.7219 7.66875 18.7969 7.53281 18.7969C7.37812 18.8109 7.27031 18.7359 7.27031 18.6281C7.27031 18.5344 7.37813 18.4594 7.51406 18.4594C7.65469 18.4453 7.77656 18.5203 7.77656 18.6281ZM6.31875 18.4172C6.28594 18.5109 6.37969 18.6187 6.52031 18.6469C6.64219 18.6937 6.78281 18.6469 6.81094 18.5531C6.83906 18.4594 6.75 18.3516 6.60938 18.3094C6.4875 18.2766 6.35156 18.3234 6.31875 18.4172ZM8.39062 18.3375C8.25469 18.3703 8.16094 18.4594 8.175 18.5672C8.18906 18.6609 8.31094 18.7219 8.45156 18.6891C8.5875 18.6563 8.68125 18.5672 8.66719 18.4734C8.65312 18.3844 8.52656 18.3234 8.39062 18.3375ZM11.475 0.375C4.97344 0.375 0 5.31094 0 11.8125C0 17.0109 3.27188 21.4594 7.94531 23.025C8.54531 23.1328 8.75625 22.7625 8.75625 22.4578C8.75625 22.1672 8.74219 20.5641 8.74219 19.5797C8.74219 19.5797 5.46094 20.2828 4.77188 18.1828C4.77188 18.1828 4.2375 16.8187 3.46875 16.4672C3.46875 16.4672 2.39531 15.7312 3.54375 15.7453C3.54375 15.7453 4.71094 15.8391 5.35312 16.9547C6.37969 18.7641 8.1 18.2438 8.77031 17.9344C8.87813 17.1844 9.18281 16.6641 9.52031 16.3547C6.9 16.0641 4.25625 15.6844 4.25625 11.175C4.25625 9.88594 4.6125 9.23906 5.3625 8.41406C5.24063 8.10938 4.84219 6.85312 5.48438 5.23125C6.46406 4.92656 8.71875 6.49688 8.71875 6.49688C9.65625 6.23438 10.6641 6.09844 11.6625 6.09844C12.6609 6.09844 13.6688 6.23438 14.6063 6.49688C14.6063 6.49688 16.8609 4.92187 17.8406 5.23125C18.4828 6.85781 18.0844 8.10938 17.9625 8.41406C18.7125 9.24375 19.1719 9.89062 19.1719 11.175C19.1719 15.6984 16.4109 16.0594 13.7906 16.3547C14.2219 16.725 14.5875 17.4281 14.5875 18.5297C14.5875 20.1094 14.5734 22.0641 14.5734 22.4484C14.5734 22.7531 14.7891 23.1234 15.3844 23.0156C20.0719 21.4594 23.25 17.0109 23.25 11.8125C23.25 5.31094 17.9766 0.375 11.475 0.375ZM4.55625 16.5422C4.49531 16.5891 4.50938 16.6969 4.58906 16.7859C4.66406 16.8609 4.77187 16.8938 4.83281 16.8328C4.89375 16.7859 4.87969 16.6781 4.8 16.5891C4.725 16.5141 4.61719 16.4812 4.55625 16.5422ZM4.05 16.1625C4.01719 16.2234 4.06406 16.2984 4.15781 16.3453C4.23281 16.3922 4.32656 16.3781 4.35938 16.3125C4.39219 16.2516 4.34531 16.1766 4.25156 16.1297C4.15781 16.1016 4.08281 16.1156 4.05 16.1625ZM5.56875 17.8312C5.49375 17.8922 5.52187 18.0328 5.62969 18.1219C5.7375 18.2297 5.87344 18.2438 5.93437 18.1688C5.99531 18.1078 5.96719 17.9672 5.87344 17.8781C5.77031 17.7703 5.62969 17.7562 5.56875 17.8312ZM5.03438 17.1422C4.95938 17.1891 4.95938 17.3109 5.03438 17.4188C5.10938 17.5266 5.23594 17.5734 5.29688 17.5266C5.37188 17.4656 5.37188 17.3438 5.29688 17.2359C5.23125 17.1281 5.10938 17.0813 5.03438 17.1422Z" />
                </g>
                <defs>
                  <clipPath id="clip0_509_459">
                    <rect width="23.25" height="24" />
                  </clipPath>
                </defs>
              </svg>
              <span className="dark:text-[#303030] font-medium">Fork me on GitHub</span>
            </button>
            <button title='Theme Toggler' onClick={() => {
              
              handleDark();
              console.log(isDarkMode)
            
            }} id="toggle" className="custom-toggle w-auto h-auto cursor-pointer">
              <div className={"toggle-dark dark:hidden w-auto h-auto rounded-md flex items-center justify-center cursor-pointer "}>
                <svg className="w-6 h-6 hover:rotate-[-15deg] transition-transform fill-[#303030] cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2756 24C16.977 24 20.3575 22.316 22.5971 19.5566C22.9284 19.1484 22.5671 18.5521 22.0551 18.6496C16.2331 19.7584 10.8866 15.2945 10.8866 9.41738C10.8866 6.03197 12.6988 2.91886 15.6443 1.24266C16.0983 0.984281 15.9841 0.295922 15.4682 0.200625C14.745 0.0672624 14.0111 0.000109516 13.2756 0C6.65178 0 1.27563 5.3677 1.27563 12C1.27563 18.6239 6.64334 24 13.2756 24Z" />
                </svg>
              </div>
              <div className={"toggle-light hidden dark:flex w-auto h-auto rounded-md flex items-center justify-center cursor-pointer "}>
                <svg className="w-6 h-6 hover:rotate-[-30deg] transition-transform fill-[#303030] cursor-pointer" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_524_2311)">
                    <path d="M12.75 7.5C10.2703 7.5 8.25 9.52031 8.25 12C8.25 14.4797 10.2703 16.5 12.75 16.5C15.2297 16.5 17.25 14.4797 17.25 12C17.25 9.52031 15.2297 7.5 12.75 7.5ZM24.3 11.2734L19.8609 9.05625L21.4313 4.35C21.6422 3.7125 21.0375 3.10781 20.4047 3.32344L15.6984 4.89375L13.4766 0.45C13.1766 -0.15 12.3234 -0.15 12.0234 0.45L9.80625 4.88906L5.09531 3.31875C4.45781 3.10781 3.85313 3.7125 4.06875 4.34531L5.63906 9.05156L1.2 11.2734C0.6 11.5734 0.6 12.4266 1.2 12.7266L5.63906 14.9437L4.06875 19.6547C3.85781 20.2922 4.4625 20.8969 5.09531 20.6813L9.80156 19.1109L12.0188 23.55C12.3188 24.15 13.1719 24.15 13.4719 23.55L15.6891 19.1109L20.3953 20.6813C21.0328 20.8922 21.6375 20.2875 21.4219 19.6547L19.8516 14.9484L24.2906 12.7313C24.9 12.4266 24.9 11.5734 24.3 11.2734ZM16.9922 16.2422C14.6531 18.5812 10.8469 18.5812 8.50781 16.2422C6.16875 13.9031 6.16875 10.0969 8.50781 7.75781C10.8469 5.41875 14.6531 5.41875 16.9922 7.75781C19.3313 10.0969 19.3313 13.9031 16.9922 16.2422Z" fill="#CFCFCF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_524_2311">
                      <rect width="24" height="24" fill="white" transform="translate(0.75)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            {/* <p>{isDarkMode ? 'dark' : 'light'}</p> */}
            <div className="menu relative hidden xl:flex flex-row-reverse gap-2 xl:gap-4 items-center">

              <button onClick={()=>{window.open('https://shadowsocks5.github.io/en/download/clients.html', '_blank')?.focus}} className="dark:text-[#cfcfcf] text-[#212121] font-medium after:content-['\f08e'] after:font-awesome after:text-sm after:ml-1 w-auto h-12 flex items-center justify-center px-5 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%]">
                VPN Clients
              </button>

              <button onClick={() => {setTab('sub')}} className={"relative dark:text-[#cfcfcf] font-medium group w-auto h-12 flex items-center justify-center px-3 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%] " + (tab === 'sub' && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]')}>
                Subscription
                <span className="absolute h-[22px] flex items-center justify-center animate-pulse duration-100 py-px px-1 bg-[#dc2626] -top-2 -right-2 text-[8px] text-white rounded-sm">NEW</span>
              </button>

              <button onClick={() => {setTab('support')}} className={"relative dark:text-[#cfcfcf] font-medium group w-auto h-12 flex items-center justify-center px-3 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%] " + (tab === 'support' && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]')}>
                Support Us
                {/* <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.9 149.9"><defs><style>.cls-1{fill:#dc2626;}.cls-2{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" width="149.9" height="149.9" rx="74.95"/><polygon class="cls-2" points="66.72 30.62 71.44 19.81 82.78 17.87 97.19 15.4 77.61 27.24 66.72 30.62"/><polygon class="cls-2" points="84.96 36.15 94.73 27.92 116.58 31.49 91.87 39.52 84.96 36.15"/><polygon class="cls-2" points="100.29 49.73 112.32 46.15 133.01 60.2 110.48 56.16 100.29 49.73"/><polygon class="cls-2" points="112.5 72.2 119.99 69.81 135.28 78.27 119.54 76.64 112.5 72.2"/><polygon class="cls-2" points="115.99 91.36 122.62 91.92 130.44 98.32 122.32 96.13 115.99 91.36"/><path class="cls-2" d="M110.62,69.51,81.14,34.85,58.46,30.71l2.38-11-7.37,6-17,13.67L14.62,86.56l.67,3.53,1.61.27,3.9,5.92,5.74-1L35.62,86l24.57-10L58.82,63.49l4.1,12.85L51.13,93.14l-8,23.63,15,8.93,5.31,1.46,2.33,3.08,7.14,4.25,46.87-27.09Zm-63-18.93-4,5.89-3.87,1.9L42,53.12l1.59-2.46,3-1.31h0l3.13-2.52Z"/><polygon class="cls-2" points="45.96 23.25 42.1 22.51 41.83 26.67 37.34 25.4 37.15 28.52 24.28 26.61 36.83 34.01 49.28 23.77 49.48 17.71 45.96 23.25"/></g></g></svg> */}
                <span className="absolute h-[22px] flex items-center justify-center animate-pulse duration-100 py-px px-1 bg-[#dc2626] -top-2 -right-2 text-[8px] text-white rounded-sm">NEW</span>
              </button>

              <button onClick={() => {setTab('why')}} className={" dark:text-[#cfcfcf] font-medium w-auto h-12 flex items-center justify-center px-5 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%] " + (tab === 'why' && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]')}>
                Why Shadowmere?
              </button>

              <button onClick={() => {setTab('about')}} className={" dark:text-[#cfcfcf] font-medium w-auto h-12 flex items-center justify-center px-5 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%] " + (tab === 'about' && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]')}>
                About
              </button>

              <button onClick={() => {setTab('servers')}} className={" dark:text-[#cfcfcf] font-medium w-auto h-12 flex items-center justify-center px-5 rounded-md hover:bg-[#EBEBEB] active:bg-[#D7D7D7] dark:hover:bg-[#1B1B1B] dark:active:bg-[#111111] cursor-pointer transition-colors transition-transform active:scale-[99%] " + (tab === 'servers' && 'bg-[#EBEBEB] dark:bg-[#1B1B1B]')}>
                Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Content activeTab={tab} />
      <ModalQR qrActive={qrCode} />
    </>
  )
}
