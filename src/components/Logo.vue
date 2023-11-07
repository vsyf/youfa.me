<template>
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Youfa Song @ youfa.me</title>
    <g>
      <path
        class="path1"
        d="M9 38C14.225 42.0926 17.3706 43.1369 23.5 42C27.1937 40.8119 29.0264 39.6591 32 37C29.9498 40.6316 29.0551 42.7085 28 46.5C27.3131 51.7023 28.5311 51.8152 33 48C37.7809 43.2384 40.0382 39.1016 44 31.5C39.7695 47.6869 35.7002 55.7934 28 70C23.5497 78.5497 21.5 82.5 15 90C8.5 97.5 4.5 94.5 8 88C11.5 81.5 26.385 65.9606 39.5 53.5C52.1064 41.2567 59.1273 34.3533 71 21.5C74.4074 17.8731 74.5 17.5 78.5 12C82.5 6.5 79.5 4 74 9C68.5 14 57.3641 31.7879 49.5 48.5C44.8917 57.9077 41.5 64.5 40 73.5C38.5 82.5 41.5 83 46 77C50.5 71 52.9871 64.8119 55.5 55.5C56.0797 50.8369 55.8537 48.2116 54 43.5C59.5203 45.8497 62.3961 46.1986 67 44.5C72.041 41.9119 74.4057 40.1978 77.5 36.5"
        stroke="black" stroke-width="2.5" stroke-linecap="round"
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
  stroke-dashoffset: 1px;
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
