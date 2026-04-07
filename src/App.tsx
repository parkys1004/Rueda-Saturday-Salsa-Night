import { motion } from 'motion/react';
import { Calendar, Clock, Music, Star, Camera, Wallet, Phone, CreditCard, ExternalLink } from 'lucide-react';

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-2/3 left-1/2 w-80 h-80 bg-orange-600 rounded-full mix-blend-screen filter blur-[90px] opacity-20"
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center pt-20 pb-10 flex flex-col items-center justify-center min-h-[60vh]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm md:text-base mb-4 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-red-500"></span>
          Salsa Night Event
          <span className="w-8 h-[1px] bg-red-500"></span>
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 text-glow leading-tight">
          RUEDA <br/> SATURDAY
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-100">
          인우 & 나타샤 초청 살사 나이트
        </p>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          호주 댄서 나타샤와 인우쌤, 그리고 맘보 델 마르가 함께하는 특별한 밤입니다.
        </p>
      </motion.div>
    </motion.section>
  );
};

const InfoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden neon-border"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
      
      <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Calendar className="text-red-500 w-8 h-8" />
        일시 및 장소
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start gap-4">
          <div className="bg-red-500/20 p-4 rounded-2xl">
            <Calendar className="text-red-400 w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">날짜</p>
            <p className="text-xl font-semibold">2026년 4월 18일 토요일</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-orange-500/20 p-4 rounded-2xl">
            <Clock className="text-orange-400 w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">시간</p>
            <p className="text-xl font-semibold">오후 7시 ~ 새벽 2시</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const WorkshopSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center md:justify-start">
        <Star className="text-yellow-500 w-8 h-8" />
        스페셜 워크샵
        <span className="text-lg font-normal text-gray-400 ml-2">(Inwoo & Natasha)</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors"></div>
          <div className="text-red-500 font-display text-5xl font-bold mb-4 opacity-50">01</div>
          <h4 className="text-2xl font-bold mb-2">살사 풋워크 & 스타일링</h4>
          <p className="text-gray-400 flex items-center gap-2">
            <Clock className="w-4 h-4" /> 19:00 ~ 20:00 (1교시)
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
          <div className="text-orange-500 font-display text-5xl font-bold mb-4 opacity-50">02</div>
          <h4 className="text-2xl font-bold mb-2">살사 파트너쉽</h4>
          <p className="text-gray-400 flex items-center gap-2">
            <Clock className="w-4 h-4" /> 20:00 ~ 21:00 (2교시)
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const PartySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="glass-panel rounded-3xl p-8 md:p-12"
    >
      <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 text-center justify-center md:justify-start">
        <Music className="text-purple-500 w-8 h-8" />
        파티 및 공연
      </h3>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400 border-b border-purple-500/30 pb-2 inline-block">Party Time</h4>
            <p className="text-2xl font-bold flex items-center gap-3">
              <Clock className="text-gray-400 w-6 h-6" />
              오후 9시 ~ 새벽 2시
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400 border-b border-purple-500/30 pb-2 inline-block">Special Performance</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xl">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                나타샤 솔로
              </li>
              <li className="flex items-center gap-3 text-xl">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                맘보 델 마르 <span className="text-gray-400 text-base">(Mambo Del Mar)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex-1 bg-black/50 rounded-2xl p-8 border border-gray-800">
          <h4 className="text-xl font-semibold mb-6 text-gray-300">Staff</h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Camera className="text-gray-300 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">촬영</p>
                <p className="text-lg font-semibold">도베르만 <span className="text-sm font-normal text-gray-500">(Doberman)</span></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <Music className="text-gray-300 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">DJ</p>
                <p className="text-lg font-semibold">디제이 신 <span className="text-sm font-normal text-gray-500">(DJ Shin)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const PriceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center md:justify-start">
        <Wallet className="text-green-400 w-8 h-8" />
        참가 비용
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-gray-900 rounded-3xl p-8 border border-gray-800 flex flex-col items-center text-center"
        >
          <p className="text-gray-400 mb-4">워크샵 1과목</p>
          <p className="text-4xl font-bold text-white mb-2">25,000<span className="text-xl text-gray-500 ml-1">원</span></p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-gradient-to-b from-red-900/40 to-black rounded-3xl p-8 border border-red-500/30 flex flex-col items-center text-center relative overflow-hidden neon-border"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <p className="text-red-400 mb-4 font-semibold">워크샵 2과목</p>
          <p className="text-4xl font-bold text-white mb-2">40,000<span className="text-xl text-gray-500 ml-1">원</span></p>
          <p className="text-sm text-gray-400 mt-2 bg-red-500/20 px-3 py-1 rounded-full">(파티 포함)</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-gray-900 rounded-3xl p-8 border border-gray-800 flex flex-col items-center text-center"
        >
          <p className="text-gray-400 mb-4">파티만 참여</p>
          <div className="space-y-2 w-full">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <span className="text-gray-400">예매</span>
              <span className="text-2xl font-bold">15,000<span className="text-sm text-gray-500 ml-1">원</span></span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-400">현매</span>
              <span className="text-2xl font-bold">20,000<span className="text-sm text-gray-500 ml-1">원</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 opacity-20 animate-pulse"></div>
        <div className="bg-[#0a0a0a] rounded-[22px] p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Phone className="text-blue-400 w-6 h-6" />
              문의
            </h3>
            <div className="flex items-center gap-4 bg-gray-900/80 p-4 rounded-2xl border border-gray-800">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">아수까</p>
                <p className="text-xl font-bold tracking-wider">010-7266-0885</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-32 bg-gray-800"></div>
          
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CreditCard className="text-yellow-400 w-6 h-6" />
              입금 계좌
            </h3>
            <div className="flex flex-col gap-2 bg-gray-900/80 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-1">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">카카오뱅크</span>
                <span className="text-gray-400 text-sm">예금주: 김영현</span>
              </div>
              <p className="text-2xl font-bold tracking-widest text-yellow-400">3333-02-4988995</p>
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

const PosterButtonSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex justify-center pb-24"
    >
      <motion.a
        href="https://cafe.naver.com/ruedasalsa/8036"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group overflow-hidden rounded-full p-[2px] neon-border"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
        <div className="relative bg-[#0a0a0a] px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:bg-opacity-80">
          <span className="text-xl font-bold text-white tracking-wide">
            파티 포스터 보러가기
          </span>
          <ExternalLink className="w-6 h-6 text-red-400" />
        </div>
      </motion.a>
    </motion.section>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 selection:text-white">
      <FloatingOrbs />
      
      <main className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-24">
        <HeroSection />
        <InfoSection />
        <WorkshopSection />
        <PartySection />
        <PriceSection />
        <ContactSection />
        <PosterButtonSection />
      </main>
    </div>
  );
}
