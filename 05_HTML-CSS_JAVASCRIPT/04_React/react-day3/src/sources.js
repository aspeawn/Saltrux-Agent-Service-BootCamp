const raw = import.meta.glob(
  ['./chapters/**/*', './projects/**/*', './playground/**/*', './missions/**/*'],
  { query: '?raw', import: 'default', eager: true },
)

export function getSource(path) {
  return raw[`./${path}`] ?? '// 파일을 찾을 수 없습니다: ' + path
}
