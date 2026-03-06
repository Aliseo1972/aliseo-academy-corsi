export interface Module {
  title: string;
  lessonsCount?: number;
  duration: string;
  lessons?: string[];
}

export interface Course {
  id: string;
  title: string;
  lessons: number;
  duration: string;
  price: string;
  category: string;
  description?: string;
  objectives?: string[];
  references?: string[];
  recipients?: string;
  fullDescription?: string[];
  syllabus?: Module[];
}

export type Category = "Sicurezza lavoratori" | "Attrezzature" | "Dirigente - Preposto" | "Utilizzo diisocianati" | "Datore di lavoro" | "HACCP" | "RLS" | "Privacy e protezione dei dati" | "Corsi per Professionisti";
