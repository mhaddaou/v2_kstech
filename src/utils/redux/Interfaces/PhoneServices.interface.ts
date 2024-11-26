export interface PhoneService {
  description: string[];
  product: string[];
}
export interface Reparation {
  name: string;
  description?: string;
  product: string[];
}

export interface PhoneReparationType {
  descriptionOne: string;
  reparation: Reparation[];
  descriptionTwo: string;
}

export interface PhoneServices {
  ipPhone: PhoneService;
  hybridePhone: PhoneService;
  reparation: PhoneReparationType;
}
