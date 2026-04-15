import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, Mic, Headphones, Volume2, Activity, Globe, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AudioAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/Audio-Annotation.png" 
            alt="Audio Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Audio Annotation Services for <br className="hidden md:block" />
             <span className="text-white">AI-Ready Sound Intelligence</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Transforming raw audio into structured, labeled data that enables machines to understand speech, sound patterns, and human communication.
          </p>
          <div className="mt-10">
            <Link to="/contact">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-black/20">
                    Scale Your Project <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text Block */}
      <section className="pt-16 md:pt-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6 text-gray-700 text-base md:text-lg font-normal leading-snug">
             <div className="space-y-2 text-left mb-6">
                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                    Acoustic Data Intelligence
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                Audio Annotation is the process of converting raw audio into structured, labeled data that enables machines to understand speech, sound patterns, and human communication. For startups building voice-enabled products, conversational AI, or sound recognition systems, accurate audio labeling is essential for training reliable and high-performance models.
             </p>
        </div>
      </section>

      {/* Capabilities & Use Cases Grid */}
      <section className="py-24 bg-slate-50 border-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
               
               {/* Comprehensive Audio Labeling Capabilities */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Comprehensive Audio Labeling Capabilities
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Speech-to-Text Transcription – Verbatim and clean transcripts with precise timestamps",
                       "Speaker Diarization – Identification and segmentation of multiple speakers",
                       "Intent & Entity Tagging – Labeling commands, keywords, and domain-specific phrases",
                       "Emotion & Sentiment Annotation – Tone detection such as happy, neutral, angry, or frustrated",
                       "Acoustic Event Detection – Tagging sounds like sirens, horns, footsteps, alarms, machinery, or background noise",
                       "Language & Accent Classification – Multilingual and regional speech labeling",
                       "Audio Segmentation – Time-bound labeling of speech, silence, overlap, and noise"
                     ].map((item, index) => (
                       <div key={index} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Use Cases for Audio Annotation */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Use Cases for Audio Annotation
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Voice assistants and conversational AI",
                       "Call center analytics and customer experience intelligence",
                       "Emotion-aware AI systems",
                       "Smart home and IoT sound recognition",
                       "Autonomous systems and edge audio intelligence",
                       "Media monitoring and content indexing"
                     ].map((item, index) => (
                       <div key={index} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Technical Deep Dive Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-24">
            
            {/* Speech-to-Text Transcription */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Speech-to-Text Transcription
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Speech-to-Text Transcription is the process of converting spoken language from audio recordings into accurate, structured text to train and evaluate speech recognition and language understanding models. For data annotation workflows, transcription goes beyond simple typing—it involves precise listening, speaker differentiation, timestamp alignment, and linguistic normalization to produce machine-ready datasets.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/stt.png" alt="Speech-to-Text" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Speaker Diarization */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Speaker Diarization for Audio Annotation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Speaker diarization is the process of segmenting an audio recording and identifying “who spoke when.” In audio annotation workflows, this involves detecting speaker boundaries, grouping speech segments by unique voices, and assigning consistent speaker labels (e.g., Speaker 1, Speaker 2, Agent, Customer). The result is a time-aligned transcript or metadata layer that clearly separates each participant’s speech across the entire recording.
                   </p>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       For AI and machine learning applications, high-quality diarization improves the performance of speech recognition, conversational analytics, voice biometrics, meeting intelligence, and call-center automation.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/diarization.png" alt="Speaker Diarization" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Intent & Entity Tagging */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Intent & Entity Tagging for Audio Annotation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Intent & Entity Tagging for audio annotation transforms spoken conversations into structured data by identifying user intent and extracting key information from speech. This process involves transcribing audio, classifying the speaker’s objective—such as requests, complaints, bookings, or inquiries—and labeling important entities like names, dates, locations, product details, account numbers, and transaction information.
                   </p>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       High-quality intent classification and entity extraction enable accurate training of conversational AI, voice assistants, intelligent IVR systems, and call center automation platforms. By converting voice data into meaningful insights, Intent & Entity Tagging improves natural language understanding (NLU), enhances customer experience, and supports scalable, context-aware voice interactions across industries.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/intent.png" alt="Intent & Entity Tagging" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Emotion & Sentiment Annotation */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Emotion & Sentiment Annotation for Audio
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Emotion & Sentiment Annotation help businesses train AI models to recognize human emotions and attitudes from voice data. This specialized audio annotation process involves labeling speech recordings based on emotional states such as happiness, anger, sadness, frustration, excitement, calmness, or neutrality, along with sentiment categories like positive, negative, or neutral. By analyzing vocal characteristics—tone, pitch, speech rate, intensity, and pauses—annotators capture the emotional context behind spoken interactions.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/emotion.png" alt="Emotion & Sentiment" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Acoustic Event Detection */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Acoustic Event Detection
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Acoustic Event Detection (AED) is a specialized audio annotation process that identifies, classifies, and precisely time-stamps distinct sound events within an audio recording. Instead of converting speech into text, AED focuses on recognizing real-world sounds such as sirens, glass breaks, footsteps, engine noise, animal calls, alarms, and industrial activity.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/acoustic.png" alt="Acoustic Event Detection" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Language & Accent Classification */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Language & Accent Classification
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Language & Accent Classification is a critical audio annotation service that involves identifying the spoken language and labeling regional accents or dialect variations within speech recordings. This process enables AI systems to accurately recognize linguistic diversity, pronunciation patterns, and regional speech characteristics for real-world voice applications.
                   </p>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       In this task, expert annotators analyze audio files and assign structured labels such as:
                   </p>
                   <div className="space-y-4 pl-4">
                       {[
                         "Primary spoken language (e.g., English, Hindi, Bengali, Arabic)",
                         "Accent or dialect type (e.g., Indian English, British English, American English)",
                         "Regional or native-language influence",
                         "Mixed-language or code-switching indicators",
                         "Quality and confidence levels"
                       ].map((item, index) => (
                         <div key={index} className="flex items-start gap-4">
                           <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                           <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                         </div>
                       ))}
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       By capturing phonetic elements such as intonation, stress, rhythm, and pronunciation shifts, Language & Accent Classification helps train AI models to perform reliably across diverse populations and speaking styles.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/language.png" alt="Language & Accent" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Audio Segmentation */}
            <div className="flex flex-col lg:flex-row gap-16 items-center pb-8">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Audio Segmentation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed pb-0">
                       Audio Segmentation is a critical audio annotation process that divides continuous audio recordings into precise, time-aligned segments based on speech, silence, speaker changes, sound events, or acoustic patterns. This structured approach transforms raw audio into organized data that improves the accuracy and efficiency of AI and machine learning models.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/audioannotation/segmentation.png" alt="Audio Segmentation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Scale Your Conversational AI?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, reliable, and scalable audio annotation tailored to your domain.
            </p>
            <div className="pt-6">
                <Link to="/contact">
                   <button className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-500 transition-all">
                      Contact Our Team <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AudioAnnotation;
