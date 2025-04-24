import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

function withAuth(Component: any) {
  return async function AuthenticatedComponent(props: any) {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect('/sign-in');
    }

    return <Component {...props} user={user} />;
  };
}

export default withAuth;
