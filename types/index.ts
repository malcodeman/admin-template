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

export type { Assets };
