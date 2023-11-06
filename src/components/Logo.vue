<template>
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Youfa Song @ youfa.me</title>
    <g>
      <path
        class="path1"
        d="M3 33C8.22499 37.0926 11.3706 38.1369 17.5 37C21.1937 35.8119 23.0264 34.6591 26 32C23.9498 35.6316 23.0551 37.7085 22 41.5C21.3131 46.7023 22.5311 46.8152 27 43C31.7809 38.2384 34.0382 34.1016 38 26.5C33.7695 42.6869 29.7002 50.7934 22 65C17.5497 73.5497 15.5 77.5 9 85C2.5 92.5 -1.5 89.5 2 83C5.5 76.5 20.385 60.9606 33.5 48.5C46.1064 36.2567 53.1273 29.3533 65 16.5C68.4074 12.8731 68.5 12.5 72.5 7C76.5 1.5 73.5 -1 68 4C62.5 9 51.3641 26.7879 43.5 43.5C38.8917 52.9077 35.5 59.5 34 68.5C32.5 77.5 35.5 78 40 72C44.5 66 46.9871 59.8119 49.5 50.5C50.0797 45.8369 49.8537 43.2116 48 38.5C53.5203 40.8497 56.3961 41.1986 61 39.5C66.041 36.9119 68.4057 35.1978 71.5 31.5"
        stroke="black" stroke-width="2" stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@media print {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}

@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 500px;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  40% {
    stroke-dasharray: 500px 0;
  }

  85% {
    stroke-dasharray: 500px 0;
  }

  95%,
  to {
    stroke-dasharray: 0 500px;
  }
}

.path1 {
  stroke-dashoffset: 10px;
  stroke-dasharray: 500px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}

.dark .path1 {
  stroke: #fdfdfd;
}
</style>
