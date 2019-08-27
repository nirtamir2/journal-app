import * as passport from "passport";
import * as passportJwt from "passport-jwt";
import { User } from "../models/user";
import { JWT_SECRET } from "../config/config";

const { Strategy: JwtStrategy, ExtractJwt } = passportJwt;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export const signInCheck = passport.authenticate("jwt", { session: false });
