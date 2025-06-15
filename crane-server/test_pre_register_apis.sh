#!/bin/bash

BASE_URL="http://localhost:4000/api/sales/pre-register"
CONTENT_TYPE_HEADER="Content-Type: application/json"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
NC="\033[0m" # No Color

print_section() {
  local title="$1"
  local payload="$2"

  echo -e "${GREEN}▶ $title${NC}"
  echo -e "${YELLOW}[REQUEST]${NC}"
  echo -e "$payload"
  echo -e "${YELLOW}[RESPONSE]${NC}"
  curl -s -X POST "$BASE_URL/$3" -H "$CONTENT_TYPE_HEADER" -d "$payload"
  echo -e "\n${GREEN}------------------------------${NC}\n"
}

# 1. seller-summary
print_section "1. seller-summary" \
'{
  "dataType": "daily",
  "endDate": "2025-06-15",
  "sellerId": 1,
  "metricIdList": [1, 2, 3]
}' "seller-summary"

# 2. seller-trend
print_section "2. seller-trend" \
'{
  "dataType": "daily",
  "endDate": "2025-06-15",
  "sellerId": 1,
  "metricIdList": [1, 2, 3]
}' "seller-trend"

# 3. seller-applications
print_section "3. seller-applications" \
'{
  "dataType": "daily",
  "endDate": "2025-06-15",
  "sellerId": 1,
  "metricIdList": [1, 2, 3]
}' "seller-applications"

# 4. content-summary
print_section "4. content-summary" \
'{
  "dataType": "daily",
  "endDate": "2025-06-15",
  "sellerId": 1,
  "metricIdList": [1, 2, 3]
}' "content-summary"

# 5. content-trend
print_section "5. content-trend" \
'{
  "dataType": "daily",
  "endDate": "2025-06-15",
  "sellerId": 1,
  "metricIdList": [1, 2, 3]
}' "content-trend"

# 6. content-channel-trend (기본)
print_section "6. content-channel-trend (기본)" \
'{
  "dataType": "daily",
  "startDate": "2025-06-01",
  "endDate": "2025-06-15",
  "contentId": "abcd1234"
}' "content-channel-trend"

# 7. content-channel-trend (subChannel)
print_section "7. content-channel-trend (subChannel)" \
'{
  "dataType": "daily",
  "startDate": "2025-06-01",
  "endDate": "2025-06-15",
  "contentId": "abcd1234",
  "subChannel": "google"
}' "content-channel-trend"

# 8. content-channel-trend (subChannel + subDetail)
print_section "8. content-channel-trend (subChannel + subDetail)" \
'{
  "dataType": "daily",
  "startDate": "2025-06-01",
  "endDate": "2025-06-15",
  "contentId": "abcd1234",
  "subChannel": "google",
  "subDetail": "keyword"
}' "content-channel-trend"

echo -e "${GREEN}✔ 모든 테스트 완료${NC}"
