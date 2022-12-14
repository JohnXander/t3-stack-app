import { inferProcedureInput } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { AppRouter, appRouter } from '../../../server/routers/_app';

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});