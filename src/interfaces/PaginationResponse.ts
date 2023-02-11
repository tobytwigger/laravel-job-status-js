export interface PaginationResponse<DataType> {
    current_page: number;
    data: DataType[];
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    next_page_url: string | null;
    links: { label: string, active: boolean, url: string | null }[]
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface PaginationParams {
    page?: number;
    per_page?: number;
}