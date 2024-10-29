import { ExtractValueByKey } from '../utils/typeUtils'

/**
 * Route vs ApiEndpoint
 * - Route: 클라이언트에서 사용하는 path
 * - ApiEndpoint: 서버와 접속하기 위한 path
 */
export interface Route {
  name: string // 링크 버튼에 표시될 Text
  url: string
}

/**
 * 새로운 Route 생성시 추가
 */
export const ROUTES = {
  HOME: {
    name: '홈',
    url: '/',
  },
  AUTH: {},
  SEAT: {
    name: '좌석 배정',
    url: '/seat/reserve',
  },
  ROOM: {
    name: '스터디룸 예약',
    url: '/room/reserve',
  },
  RULES: {
    name: '이용수칙',
    url: '/rules',
  },
} as const

// 자동으로 갱신되는 Url 타입
export type RouteType = ExtractValueByKey<typeof ROUTES, 'url'>
