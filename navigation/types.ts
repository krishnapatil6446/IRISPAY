export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  OTP: { phone: string };
  IrisSetup: undefined;
  PaymentGateway: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Transfer: undefined;
  Receive: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type TransferStackParamList = {
  TransferList: undefined;
  SendAmount: { recipient: string };
  PaymentConfirmation: { amount: number; recipient: string };
  PaymentSuccess: { amount: number; recipient: string };
}; 