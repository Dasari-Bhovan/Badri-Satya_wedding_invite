import { address } from "framer-motion/client";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

export interface WeddingConfig {
  couple: {
    bride: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    groom: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
        frame?: {
          "1:1": string;
          portrait: string;
        };
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    firstMeet: string;
    loveStory: Array<{
      date: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
  event: {
    Marraige: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
    reception: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
  };
  gallery: {
    prewedding: Array<{
      url: string;
      caption: string;
    }>;
    engagement: Array<{
      url: string;
      caption: string;
    }>;
  };
  digitalEnvelope: {
    banks: Array<{
      name: string;
      accountNumber: string;
      accountHolder: string;
    }>;
    eWallets: Array<{
      name: string;
      number: string;
      logo: string;
    }>;
  };
  rsvp: {
    whatsappNumber: string;
    formFields: Array<{
      name: string;
      label: string;
      type: string;
      options?: string[];
    }>;
  };
  specialFeatures: {
    countdownTimer: boolean;
    photoBoothFrame: boolean;
    virtualGuestBook: boolean;
    giftRegistry: {
      enabled: boolean;
      items: Array<{
        title: string;
        description?: string;
        image: string;
        link?: string;
      }>;
    };
    liveStreaming: {
      enabled: boolean;
      platform: string;
      link: string;
    };
  };
}


export const themes = {
  sage: {
    primary: "#B2BEB5",
    secondary: "#E8EDE6",
    accent: "#9CAF88",
    text: "#454B1B"
  },
  dustyBlue: {
    primary: "#4F6F8F",
    secondary: "#E5EDF5",
    accent: "#8FA5BC",
    text: "#2C3E50"
  },
  softBrown: {
    primary: "#B49F89",
    secondary: "#F5E6D3",
    accent: "#DEC4A7",
    text: "#5E4B3B"
  },
  roseDust: {
    primary: "#C5AFA0",
    secondary: "#F2E9E4",
    accent: "#E6D1C5",
    text: "#8C7267"
  },
  oliveGreen: {
    primary: "#A3B18A",
    secondary: "#E9EDe4",
    accent: "#CAD2C5",
    text: "#52573D"
  }
};

export const weddingConfig = {
  couple: {
    bride: {
      name: " Satya Sritha",
      fullName: "Satya Sritha Madisetty",
      photo: {
        url: "images/couple/vadina solo.JPG",
        aspectRatio: "1:1",
        frame: {
          "1:1": "images/couple/vadina final frame.png",
          portrait: "images/couple/vadina final frame.png"
        }
      },
      parents: "Daughter of Mr.Srinivasa Rao and Mrs.Himabindu",
      about: "Deskripsi singkat tentang mempelai wanita",
      socialMedia: {
        instagram: "https://instagram.com/",
        facebook: undefined,
        twitter: undefined
      }
    },
    groom: {
      name: "Badrinath",
      fullName: "Badrinath Dasari",
      photo: {
        url: "images/couple/anna solo.JPG",
        aspectRatio: "1:1",
        frame: {
          "1:1": "images/couple/anna2fi.PNG",
          portrait: "images/couple/anna2fi.JPG"
        }
      },
      parents: "Son of Mrs.Rama Lakshmi Shirisha",
      about: "Deskripsi singkat tentang mempelai pria",
    },
    // firstMeet: "Dengan izin Allah, perjalanan kami dimulai. 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya' (QS. Ar-Rum: 21)",
    loveStory: [
      {
        date: "2025-05-13",
        title: "Haldi",
        time:"5:00 PM",
        description: "Haldi Ceremony",
        image: "images/events/haldi.jpg",
        venue:"At Home",
        address:"Ongole",
        mapLink:"https://goo.gl/maps/qxqYyk43g3CJBX1e8?g_st=aw"
      },
      {
        date: "2025-05-15",
        title: "Engagement",
        time:"7:30 PM",
        description: "Engagement Ceremony",
        image: "images/events/engagement.jpg",
        venue:"Mounaswamy Mutt",
        address:"Near Gogarbham dam,Tirumala",
        mapLink:"https://maps.app.goo.gl/g8mm63wqLBi8xt1PA"
      },
      {
        date: "2025-05-16",
        title: "Marriage",
        time:"4:58 AM",
        description: "Marriage Ceremony",
        image: "images/events/marriage.webp",
        venue:"Mounaswamy Mutt",
        address:"Near Gogarbham dam,Tirumala",
        mapLink:"https://maps.app.goo.gl/g8mm63wqLBi8xt1PA"
      },
      {
        date: "2025-05-17",
        title: "Reception",
        time:"7:30 PM",
        description: "Reception Ceremony",
        image: "images/events/reception.webp",
        venue:"M S Function Hall ",
        address:"Beside Dmart,Ongole",
        mapLink:"https://maps.app.goo.gl/Qn7GiAtCStDMnSp79"
      },
      
    ]
  },
  event: {
    Marraige: {
      date: "2025-05-16",
      time: "4:58",
      venue: "Nama Tempat",
      address: "Alamat Lengkap",
      mapLink: "Google Maps Link",
      dresscode: "Putih / Broken White",
      additional_info: "Info tambahan tentang acara Marraige"
    },
    reception: {
      date: "2025-05-17",
      time: "20:00",
      venue: "Nama Tempat",
      address: "Alamat Lengkap",
      mapLink: "Google Maps Link",
      dresscode: "Sage Green / Earthy Colors",
      additional_info: "Info tambahan tentang acara resepsi"
    }
  },
  digitalEnvelope: {
    banks: [
      // {
      //   name: "BCA",
      //   accountNumber: "1234567890",
      //   accountHolder: "NAMA PEMILIK"
      // },
      // {
      //   name: "Mandiri",
      //   accountNumber: "0987654321",
      //   accountHolder: "NAMA PEMILIK"
      // },
      {
        name: "BNI",
        accountNumber: "1234567890",
        accountHolder: "NAMA PEMILIK"
      },
      // {
      //   name: "BSI",
      //   accountNumber: "1234567890",
      //   accountHolder: "NAMA PEMILIK"
      // },
      {
        name: "Bank Jago Syariah",
        accountNumber: "1234567890",
        accountHolder: "NAMA PEMILIK"
      }
    ],
    eWallets: [
      {
        name: "GoPay",
        number: "08888024148",
        logo: "images/logos/gopay.webp"
      },
      // {
      //   name: "OVO",
      //   number: "08888024148",
      //   logo: "images/logos/ovo.webp"
      // },
      {
        name: "ShopeePay",
        number: "08",
        logo: "images/logos/shopeepay.webp"
      }
    ]
  },
  gallery: {
    prewedding: [
      {
        url: '/images/gallery/optimized/c1-min.webp',
        thumbnail:'/images/gallery/optimized/c1-min-crop.PNG',
        caption: ' First Pic'
      },
      {
        url: '/images/gallery/optimized/c2-min.webp',
        thumbnail:'/images/gallery/optimized/c2-min-crop.PNG',
        caption: 'Second Pic '
      },
      {
        url: '/images/gallery/optimized/c3-min.webp',
        thumbnail:'/images/gallery/optimized/c3-min-crop.PNG',
        caption: 'Third Pic'
      },
      {
        url: '/images/gallery/optimized/c4-min.webp',
        thumbnail:'/images/gallery/optimized/c4-min-crop.PNG',
        caption: 'Fourth Pic'
      }
    ]
  },
  music: {
    tracks: [
      {
        src: '/music/song1.mp3',
        title: 'Lagu 1',
        artist: 'Artis 1'
      }
    ]
  },
  guestBook: {
    enabled: true,
    moderationEnabled: true
  },
  rsvp: {
    enabled: true,
    deadline: "2024-05-20",
    whatsappNumber: "081234567890",
    additionalFields: [
      {
        name: "jumlah_tamu",
        label: "Jumlah Tamu",
        type: "number"
      },
      {
        name: "kehadiran",
        label: "Konfirmasi Kehadiran",
        type: "select",
        options: ["Hadir", "Tidak Hadir", "Masih Ragu"]
      }
    ]
  },
  specialFeatures: {
    countdownTimer: true,
    photoBoothFrame: true,
    virtualGuestBook: true,
    giftRegistry: {
      enabled: false,
      items: [
        {
          title: "Amazon Registry",
          description: "Find our wishlist on Amazon",
          image: "/images/registry/amazon.webp",
          link: "https://amazon.com/registry/..."
        },
        {
          title: "Target Registry",
          description: "Shop our registry at Target",
          image: "/images/registry/target.webp",
          link: "https://target.com/registry/..."
        }
      ]
    },
    liveStreaming: {
      enabled: false,
      platform: "YouTube",
      link: "https://youtube.com/live/..."
    }
  }
}