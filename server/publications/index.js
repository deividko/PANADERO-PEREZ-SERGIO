import posts from './posts';
import videos from './videos';
import roles from './roles';
import nominations from './nominations';
import presence from './presence';
import likes from './likes';

export default function () {
  posts();
  videos();
  roles();
  presence();
  nominations();
  likes();
}
