export type ConfigName = 'service' | 'tokens';

export type ServiceConfig = {
  PORT: number;
  CUSTOM_IMG_VIEWER_SERVICE: string;
  PROXY_HOSTNAME?: string;
  PROXY_PORT?: number;
};

export type TokensConfig = {
  TWITTER_SCAPPER: {
    /** Path to executable file */
    binary_file_path: string;
    /** Path to JSON file with cookies (generated by that executable prior to running Node.js) */
    cookies_file_path: string;
  };
  /** Cookies from browser */
  INSTAGRAM_COOKIE_ONE_LINE_FOR_POSTS: string;
  /** Netscape cookies file location for Reels/yt-dlp */
  INSTAGRAM_COOKIE_FILE_LOCATION_FOR_REELS: string;
  TUMBLR_OAUTH: {
    consumer_key: string;
    consumer_secret: string;
    token: string;
    token_secret: string;
  };
  JOYREACTOR_COOKIE: string;
};

export type GenericConfig = ServiceConfig | TokensConfig;
