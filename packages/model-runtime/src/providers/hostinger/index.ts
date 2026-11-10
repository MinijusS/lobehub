import { ModelProvider } from 'model-bank';

import { createOpenAICompatibleRuntime } from '../../core/openaiCompatibleFactory';
import { processMultiProviderModelList } from '../../utils/modelParse';

export const LobeHostingerAI = createOpenAICompatibleRuntime({
  baseURL: 'https://router.hostinger.com/v1',
  models: async ({ client }) => {
    const modelsPage = (await client.models.list()) as any;
    return processMultiProviderModelList(modelsPage.data || [], 'hostinger');
  },
  provider: ModelProvider.Hostinger,
});
