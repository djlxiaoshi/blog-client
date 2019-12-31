export default function({ store, redirect }) {
  if (!store.state.user.userInfo) {
    if (process.client) {
      const { pathname, search } = window.location;
      redirect(`/login?_redirectUrl=${encodeURIComponent(pathname + search)}`);
    } else {
      redirect('/login');
    }
  }
}
