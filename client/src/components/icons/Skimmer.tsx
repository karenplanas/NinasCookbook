import React from 'react'

interface Props {
  width?: number
  height?: number
}

const Skimmer : React.FC<Props> = ({ width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.7 6.349C6.62856 6.27734 6.52097 6.25581 6.42746 6.29446C6.33394 6.3331 6.27295 6.42431 6.27295 6.5255C6.27295 6.62669 6.33394 6.7179 6.42746 6.75654C6.52097 6.79519 6.62856 6.77366 6.7 6.702C6.79726 6.60443 6.79726 6.44657 6.7 6.349" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.177 8.824C9.10556 8.75234 8.99797 8.73081 8.90446 8.76946C8.81094 8.80811 8.74995 8.89931 8.74995 9.0005C8.74995 9.10169 8.81094 9.1929 8.90446 9.23155C8.99797 9.27019 9.10556 9.24866 9.177 9.177C9.27426 9.07943 9.27426 8.92157 9.177 8.824" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.651 11.3C11.5796 11.2283 11.472 11.2068 11.3785 11.2455C11.2849 11.2841 11.2239 11.3753 11.2239 11.4765C11.2239 11.5777 11.2849 11.6689 11.3785 11.7075C11.472 11.7462 11.5796 11.7247 11.651 11.653C11.698 11.6063 11.7244 11.5428 11.7244 11.4765C11.7244 11.4103 11.698 11.3467 11.651 11.3" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.227 8.824C4.15556 8.75234 4.04797 8.73081 3.95446 8.76946C3.86094 8.80811 3.79995 8.89931 3.79995 9.0005C3.79995 9.10169 3.86094 9.1929 3.95446 9.23155C4.04797 9.27019 4.15556 9.24866 4.227 9.177C4.32426 9.07943 4.32426 8.92157 4.227 8.824" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.7 11.3C6.62856 11.2283 6.52097 11.2068 6.42746 11.2455C6.33394 11.2841 6.27295 11.3753 6.27295 11.4765C6.27295 11.5777 6.33394 11.6689 6.42746 11.7075C6.52097 11.7462 6.62856 11.7247 6.7 11.653C6.79726 11.5554 6.79726 11.3976 6.7 11.3" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.177 13.774C9.10556 13.7023 8.99797 13.6808 8.90446 13.7195C8.81094 13.7581 8.74995 13.8493 8.74995 13.9505C8.74995 14.0517 8.81094 14.1429 8.90446 14.1815C8.99797 14.2202 9.10556 14.1987 9.177 14.127C9.27426 14.0294 9.27426 13.8716 9.177 13.774" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.177 3.874C9.0793 3.77655 8.92113 3.77668 8.8236 3.8743C8.72606 3.97191 8.72606 4.13009 8.8236 4.2277C8.92113 4.32532 9.0793 4.32545 9.177 4.228C9.22402 4.1811 9.25045 4.11741 9.25045 4.051C9.25045 3.98459 9.22402 3.9209 9.177 3.874" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.651 6.349C11.5796 6.27734 11.472 6.25581 11.3785 6.29446C11.2849 6.3331 11.2239 6.42431 11.2239 6.5255C11.2239 6.62669 11.2849 6.7179 11.3785 6.75654C11.472 6.79519 11.5796 6.77366 11.651 6.702C11.698 6.65527 11.7244 6.59175 11.7244 6.5255C11.7244 6.45925 11.698 6.39573 11.651 6.349" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.126 8.824C14.0546 8.75234 13.947 8.73081 13.8535 8.76946C13.7599 8.80811 13.6989 8.89931 13.6989 9.0005C13.6989 9.10169 13.7599 9.1929 13.8535 9.23155C13.947 9.27019 14.0546 9.24866 14.126 9.177C14.173 9.13027 14.1994 9.06675 14.1994 9.0005C14.1994 8.93425 14.173 8.87073 14.126 8.824" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.977 13.855L23.061 20.939C23.647 21.525 23.647 22.475 23.061 23.061C22.475 23.647 21.525 23.647 20.939 23.061L13.856 15.977" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.879 17.757L17.757 19.879" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export { Skimmer }

