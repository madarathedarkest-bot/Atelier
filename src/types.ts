export type Screen = 'landing' | 'auth' | 'dashboard' | 'inventory' | 'detail' | 'bespoke' | 'heritage' | 'journal' | 'clients';

export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  status: 'In Stock' | 'Reserved' | 'On Loan';
  value: string;
  marketDelta: string;
  image: string;
  description?: string;
  price?: string;
  movement: 'Automatic' | 'Manual';
  material: 'Oystersteel' | '18ct Yellow Gold' | 'Platinum';
}

export const WATCHES: Watch[] = [
  {
    id: '1',
    brand: 'Rolex',
    model: 'GMT-Master II',
    reference: '126710BLRO',
    status: 'In Stock',
    value: '$22,400',
    marketDelta: '+12%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeG7I0OyITjC91-dgQtR1tMb9EG4K4XAcAGVMIEI4jF8F2Q2djb2hYzvgieKcnyCjRTzoUqOtA4Yo_0_z-wV8_V1X5nQ_v1GV4uyviHQNC2MT6f1K8RrRdEOpC8HWfoQF4ljZnlvqElm-BfdADs79l5AVSt1oTMXoDGVnS1Boyf7xPFKziUQl8fxWXDCpIjDUtkM8rnO8TP5gB_Fh1Wk_dCwKXk30I_9K4qJekHya8osx-Sl3F-NlLvMPZtM5MdH14A88QGQF4MpoN',
    price: 'CHF 22,400',
    movement: 'Automatic',
    material: 'Oystersteel'
  },
  {
    id: '2',
    brand: 'Patek Philippe',
    model: 'Nautilus',
    reference: '5712R-001',
    status: 'Reserved',
    value: '$98,100',
    marketDelta: '+4%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVTeiQbPqHDamh8Qw3uDg8RNOzHYnmHOhLVOTvNkTgnTlPQAyULgrpvgBPbsHF9OIYEbOAbssy7IUvQPwz1jybLz6H2YxcmIlUAVRZ0Bi1MjJa-9Svdem86tigN1lt0sXT3uk5QrPsVlR7g_sdHwSloj0OS7x1XGmDBvh_xha70RuZJSymJKB_YVZQnrYxiNxYYwomb5_fM8rbaw4dEpa_9TIlgadKeUeSLFW3dzu6LXwkuDdbWXWHYetEg3RKkx-duKc5JCtMcLi_',
    price: 'CHF 98,100',
    movement: 'Automatic',
    material: '18ct Yellow Gold'
  },
  {
    id: '3',
    brand: 'Audemars Piguet',
    model: 'Skeleton Royal Oak',
    reference: '15407ST.OO.1220ST.01',
    status: 'On Loan',
    value: '$215,000',
    marketDelta: '-2%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABIOaE7Dj9QEZIMl5sjC2n1cr6ca4roaEKNYB3ThnFd5C8CvR9L2P3W4hhr3QtKaaJ0XLFBekzQU4wncwrjqyApAy50IpekuWOGkt0hbv222Iuf_DSdZrRBYEoncdkKZfOy5q_ubPdks5YQgpa6qHdLLBZaTJSeis9j4kUDXByuOw8OeEQoFc2Im07UzN22-yIIIPwTAwkP4c9s_X0g6ExusqjWkpvlxxWXIiAEqn0eKTdDao2GVxLxivy-iaPp4yJ85KZiqaYqZWM',
    price: 'CHF 215,000',
    movement: 'Automatic',
    material: 'Oystersteel'
  },
  {
    id: '4',
    brand: 'Rolex',
    model: 'Day-Date 40',
    reference: '228238',
    status: 'In Stock',
    value: '$42,500',
    marketDelta: '+8%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbgbkzK2UJ2MuEVWfUjcx0g8lV-HnzKaa2PJ7coQh0kOwodHOWpyqNeIEScVEJqLKr4mYqV8zx3FKkHZSpfDKtb8aSTiI9Kf2aGfBg1w-1eltl_1nQ1jRKc8VmPQxBSL5X-y5bMrYAIImYi414ytjdl1arJUvcnSr4qL847dPYXQ_ZQ1uTuyIlHJXLgFrqAmAshln_qCVqojgvIrDxKKFzEeVVGgizGXJZjdu0_n_8njLAqeF7Ik6RC2ocyY7cw5qlxm1fLQJbK4mR',
    price: 'CHF 42,500',
    movement: 'Automatic',
    material: '18ct Yellow Gold'
  },
  {
    id: '5',
    brand: 'Patek Philippe',
    model: 'Calatrava',
    reference: '5227J-001',
    status: 'In Stock',
    value: '$35,800',
    marketDelta: '+2%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbgbkzK2UJ2MuEVWfUjcx0g8lV-HnzKaa2PJ7coQh0kOwodHOWpyqNeIEScVEJqLKr4mYqV8zx3FKkHZSpfDKtb8aSTiI9Kf2aGfBg1w-1eltl_1nQ1jRKc8VmPQxBSL5X-y5bMrYAIImYi414ytjdl1arJUvcnSr4qL847dPYXQ_ZQ1uTuyIlHJXLgFrqAmAshln_qCVqojgvIrDxKKFzEeVVGgizGXJZjdu0_n_8njLAqeF7Ik6RC2ocyY7cw5qlxm1fLQJbK4mR',
    price: 'CHF 35,800',
    movement: 'Automatic',
    material: '18ct Yellow Gold'
  },
  {
    id: '6',
    brand: 'Rolex',
    model: 'Submariner',
    reference: '126618LB',
    status: 'In Stock',
    value: '$39,000',
    marketDelta: '+5%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYpDlb4VF9Lmgo3wrMNcdOTEm81ofJLbevzVfrPsS9EtRny86KTCXKGSLDpvu20DCrGXTQA_et5t48sXMxGXcDnHObUZ-Aj42GhQ1XQ8VumJGsTYyGtGZgB45fid5MFAQyAHy43Ll3_I3J4B1N5Pf9QTzjQ0hAoHf1TSViqIo0aC4K6PE8hLUw5-BHHW1-46MuiufHYCx-Wzd1zuLYQAN0-TF-yeukqhR1gBDbhWa2GCVW-c9OXb0s_rCEJKCUkNIUwePDqMpS0i6s',
    price: 'CHF 39,000',
    movement: 'Automatic',
    material: '18ct Yellow Gold'
  },
  {
    id: '7',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    reference: '15500OR',
    status: 'Reserved',
    value: '$62,000',
    marketDelta: '+3%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbgbkzK2UJ2MuEVWfUjcx0g8lV-HnzKaa2PJ7coQh0kOwodHOWpyqNeIEScVEJqLKr4mYqV8zx3FKkHZSpfDKtb8aSTiI9Kf2aGfBg1w-1eltl_1nQ1jRKc8VmPQxBSL5X-y5bMrYAIImYi414ytjdl1arJUvcnSr4qL847dPYXQ_ZQ1uTuyIlHJXLgFrqAmAshln_qCVqojgvIrDxKKFzEeVVGgizGXJZjdu0_n_8njLAqeF7Ik6RC2ocyY7cw5qlxm1fLQJbK4mR',
    price: 'CHF 62,000',
    movement: 'Automatic',
    material: '18ct Yellow Gold'
  }
];

export const ACQUISITIONS = [
  {
    name: 'Julian V. Rothschild',
    model: 'AP Royal Oak Jumbo',
    value: '$142,000',
    time: '3h ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDThuyOkolrpjrWsN3EVBPr0EGjxjtzeo2bOzbEM-FkGrpNg2uJYY4BNaaVYHqT9nOzIdKxKxcYYeskZaUC_A46PohJQ1C3Bocax9isJhWYv-YQKuPoILW5YILECvUrW5G0jAUlC4eOc4Cga4-2q57MuC1k57FtOD9cu63GIm98h3HE7UEHvFfAjHJpkSDo9NdsSnxTV4fRsPPf2wZJeRcOnfgxmpoowz91h8bI_x5kf8oPDLRPogdMEzZllyL8OH6GFWMH412rUq7r'
  },
  {
    name: 'Elena Sterling',
    model: 'Patek 5711/1A-010',
    value: '$188,500',
    time: 'Yesterday',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6IPPbsnpxTajovmoJq0kGzxROo40BsHA6KnvMaZSLkHbim2fg2Vh_cQtpEDd9QoCigMTATWzsBLYfERwAGKy8cM39VsRjjGcpdjBBEF3vbtKcECUI9LuuhJ2Q0wSa7ehVxvf6TO0euWCQO7aKiU7q5QTgZYscNUtUGUv0PQG9lmo2sY0TjKfR1KsWO1LGpMprADYti7jE-2T7kSuuDUedboW09SjmR_sGUJSIT6gxajjCt6bviQYyStblfhFahuDvX9EHqAcvjc7u'
  },
  {
    name: 'Marcus Thorne',
    model: 'Rolex Daytona 116500LN',
    value: '$34,200',
    time: 'Mar 12',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChdxFBLw4sdMJB4cmC0jq_mObecKXKhe5-lpqot0Yq3NmlJTNpfGFogSYewpKDX4bXQD6JDNjvZxjocVSWf622OC-EsYrdpkVLmwo3JOEBywxJnnA6T7nqFcEEspk73kI8cLrq8z53kZt3oo4jSel72lLWZYvKp0MvhwFmpVTV6q1zMi3YmYTHS_iNwoDkiHLHePPUx1KWs67ePE3IS6iYWX_DzPgAoTrRWqYAP9Ac2WAXrZtN1xGAm06FfkKqfK39m58pwcu441vM'
  }
];
