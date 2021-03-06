---
title: 세션ID이란 무엇인가요?
description: 세션ID가 무엇인지 알아보고 어떤 경우에 사용되고 보안적인 특징까지 소개해보도록 하겠습니다.
color: '#000'
backgroundColor: '#80d6fc'
backgroundColorForPreview: '#b8e9ff'
img: '/images/wiki_seo_friendly_url.png'
createdAt: '2021-09-29 00:00:00'
updatedAt: '2021-09-29 00:00:00'
author:
  name: 엔지니어
tags: ['세션', '세션ID', 'Session', 'Session ID', 'SID']
---

세션 ID는 서버가 요청하는 클라이언트에 할당하는 고유 번호입니다. ID는 식별자를 나타내며 사용자 활동을 식별하고 추적하는 데 사용됩니다. 이 고유 ID는 숫자 코드 또는 영어와 숫자의 혼합 코드일 수 있습니다. 컴퓨터 과학에서 세션은 서버와 클라이언트 간의 연결하는 중요한 요소입니다.

<!--more-->

## 세션 ID 전송 방법

짧은 버전의 SID(세션 ID)는 웹 서버의 내에서도 일반적으로 사용됩니다. 검색 엔진 최적화(SEO) 분야에서 세션ID는 특정 상황에서 중복 컨텐츠 문제를 일으킬 수 있습니다.

### 쿠키

사용자가 온라인 상점과 같은 웹 사이트를 방문하면 상점 서버는 해당 방문자와 해당 세션에 정확히 할당된 개별 세션 ID를 생성합니다. 이 세션 ID는 방문자 컴퓨터의 브라우저에 쿠키라는 이름으로 저장됩니다. 쿠키는 유효기간이 지나거나 강제로 삭제하는 경우를 제외하고 브라우저에서 쿠키를 계속 저장하고 있습니다.

따라서 해당 방문자가 사이트의 다른 페이지를 보거나 사이트를 떠난 경우, 쿠키는 브라우저에 계속 남아 있기 때문에 세션이 손실되지 않도록 할 수 있습니다. 이렇게 하면 사용자가 다시 웹사이트로 돌아오자마자 장바구니를 복원할 수 있습니다.

장바구니의 제품은 세션ID에 할당되고 세션 쿠키에 저장됩니다. 서버에 대한 각 요청과 사용자에 대한 각 응답에는 정확히 이 세션ID가 수반되어야 합니다. 그렇지 않으면 다음 클라이언트 요청에 새로운 ID가 할당되고 이전 세션이 손실됩니다.

### URL 매개변수

사용자가 "쿠키 비활성화" 기능을 사용하여 사전에 쿠키 저장을 비활성화한 경우, 서버와 브라우저 간의 세션ID를 유지하기 위해  스토어 페이지의 URL에 대한 매개변수를 이용할 수 있습니다. 이 매개변수를 사용하면 서버가 세션을 인식하거나 생성할 수 있습니다. 즉, 장바구니 또는 이와 유사한 정보가 세션에 연결될 때 다시 검색할 수 있습니다.

세션 ID가 매개변수로 첨부된 URL의 예:

```text
https://example.com/index.php?sid=aksdi3413-3kfk31
```

웹 프로그래밍 언어 PHP는 이 링크를 식별하고 할당할 수 있습니다. 따라서 이 세션에 연결된 장바구니를 다시 검색할 수 있습니다.

<simple-diagnosis title='검색엔진 친화적인 URL 최적화 진단하기' description='검색엔진 최적화를 위한 URL 구조 최적화를 진단해보세요.'></simple-diagnosis>

### Hidden Input Field

사용자 행동을 추적하는 또 다른 형식은 사용자가 보거나 변경할 수 없는 데이터를 서버로 보낼 수 있는 숨겨진 인풋 필드입니다. 예를 들어, 숨겨진 인풋 필드는 업데이트할 데이터베이스 항목에 대한 정보를 전송할 수 있습니다. 이 방법은 브라우저에서 서버로 세션 ID를 전송하는 데에도 사용할 수 있습니다.

## 세션 ID 및 SEO

URL 매개변수를 사용하여 세션 ID를 전송하면 Google에서 결과 URL을 찾고 색인을 생성할 수 있으므로 컨텐츠가 중복 될 수 있습니다. 서로 다른 사용자가 동일한 제품 또는 카테고리 페이지에 액세스하여 공유를 위해 URL을 복사하는 경우, SID가 포함되어 서로다른 URL이기 때문에 검색엔진은 중복 컨텐츠라고 생각할 수 있습니다.

SID를 사용할 때는 SEO를 염두에 두고 사용하는 것이 중요합니다. 이 경우, 구글에서는 해당 페이지에 대해서 엄청난 패널티를 부과하지는 않습니다. 하지만 패널티를 아예 부과하지 않는 것은 아니기 때문에 적절하게 처리해주는 것이 중요합니다.

결론적으로 SEO 관점에서 URL 매개변수를 통해 세션ID를 전송하는 것은 문제가 될 수 있으므로 피해야 합니다. 이 것이 가능하지 않은 경우 <nuxt-link to="/wiki/canonical-url-tag">정식 링크</nuxt-link>를 사용하여 문제를 해결할 수 있습니다. 이렇게 하면 세션ID가 없는 URL이 색인을 생성 하기 위한 원래 리소스라는 신호가 검색엔진에 전달되고 세션ID가 있는 URL은 색인이 생성되지 않습니다.

세션ID는 필수 항목으로 간주되어서는 안 되며 사이트 방문자 또는 사이트 운영자에게 유용한 경우에만 사용해야 합니다.

## 세션 쿠키 및 GDPR

GDPR(General Data Protection Regulation)은 2018년 5월 25일부터 EU에서 시행되었습니다. 세션 쿠키 사용을 명시적으로 규제하지 않습니다. 단, GDPR 제 6조에 따르면 책임자 또는 제 3자의 정당한 이익을 보호하기 위해 쿠키가 필요한 경우에는 쿠키 사용에 대한 사전 동의를 받아야합니다. 세션 쿠키도 이와 같이 분류될 수 있습니다. 따라서 세션 쿠키의 사용은 개인 정보 보호 정책에 명시되어야 합니다.

## 보안

세션ID의 사용은 비교적 안전한 것으로 간주됩니다. 그러나 브라우저에 저장된 세션ID를 조작하면 이론적으로 다른 사용자의 세션 ID를 얻을 수 있습니다. 세션ID의 생성의 복잡도가 높은 서버라면 안전성이 높다고 평가할 수 있고 이 외에도 EU의 온라인 상점은 종종 SSL 암호화를 사용하여 추가 보안 수준을 제공합니다. 따라서 해킹과 같은 문제가 발생할 가능성이 매우 낮습니다.

의도적으로 악성 코드를 구현한 경우에는 상황이 다릅니다. 공격자가 XSS(Cross-Site-Scripting)를 통해 웹샵 시스템에 이러한 코드를 삽입하고 사용자가 웹사이트를 통해 코드를 실행하면 ID가 전송되고 전체 세션이 하이재킹(예: 리디렉션)될 수 있습니다. 따라서 공격자는 특정 고객 데이터에 액세스할 수 있으며 사용자를 대신하여 주문할 수 있습니다.

## 참고 문서

- https://auth0.com/blog/what-is-broken-authentication/
