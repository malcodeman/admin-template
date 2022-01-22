type Assets = {
  assets: {
    id: number;
    token_id: number;
    num_sales: number;
    background_color: null;
    image_url: string;
    image_preview_url: string;
    image_thumbnail_url: string;
    image_original_url: null;
    animation_url: null;
    animation_original_url: null;
    name: string;
    description: string;
    external_link: null;
    asset_contract: {
      address: string;
      asset_contract_type: string;
      created_date: string;
      name: string;
    };
    permalink: string;
    collection: {
      banner_image_url: string;
    };
    decimals: null;
    token_metadata: null;
  }[];
};
type Collection = {
  collections: {
    banner_image_url: null;
    chat_url: null;
    created_date: string;
    default_to_fiat: boolean;
    description: string;
    dev_buyer_fee_basis_points: string;
    dev_seller_fee_basis_points: string;
    discord_url: null;
    display_data: {
      card_display_style: string;
      images: string[];
    };
    external_url: null;
    featured: boolean;
    featured_image_url: null;
    hidden: boolean;
    image_url: null;
    instagram_username: null;
    is_subject_to_whitelist: boolean;
    large_image_url: null;
    medium_username: null;
    name: string;
    only_proxied_transfers: boolean;
    opensea_buyer_fee_basis_points: string;
    opensea_seller_fee_basis_points: string;
    payout_address: null;
    primary_asset_contracts: string[];
    require_email: boolean;
    safelist_request_status: string;
    short_description: null;
    slug: string;
    stats: {
      average_price: number;
      count: number;
      floor_price: number;
      market_cap: number;
      num_owners: number;
      num_reports: number;
      one_day_average_price: number;
      one_day_change: number;
      one_day_sales: number;
      one_day_volume: number;
      seven_day_average_price: number;
      seven_day_change: number;
      seven_day_sales: number;
      seven_day_volume: number;
      thirty_day_average_price: number;
      thirty_day_change: number;
      thirty_day_sales: number;
      thirty_day_volume: number;
      total_sales: number;
      total_supply: number;
      total_volume: number;
    };
    telegram_url: null;
    traits: {};
    twitter_username: null;
    wiki_url: null;
  }[];
};
type OrderBy = "pk" | "sale_date" | "sale_count" | "sale_price";
type OrderDirection = "asc" | "desc";

export type { Assets, Collection, OrderBy, OrderDirection };
