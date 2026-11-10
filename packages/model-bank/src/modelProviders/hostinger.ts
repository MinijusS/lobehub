import type { ModelProviderCard } from '../types';

const Hostinger: ModelProviderCard = {
  chatModels: [],
  description:
    'Hostinger AI Router provides OpenAI-compatible access to models from multiple AI providers through one API key and shared Hostinger AI credit balance.',
  id: 'hostinger',
  modelsUrl: 'https://www.hostinger.com/support/what-is-hostinger-ai-router-and-how-to-get-started/',
  name: 'Hostinger AI Router',
  settings: {
    proxyUrl: {
      placeholder: 'https://router.hostinger.com/v1',
    },
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://www.hostinger.com/ai-router',
};

export default Hostinger;
