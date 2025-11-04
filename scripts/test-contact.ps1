Write-Host "`n🧪 Testing Contact Form API..." -ForegroundColor Cyan

$body = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Corporation"
    message = "Testing contact form with Turso DB"
} | ConvertTo-Json

try {
    Write-Host "`nSending request to: http://localhost:3000/api/contact" -ForegroundColor Gray
    Write-Host "Body: $body`n" -ForegroundColor Gray
    
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/contact" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -ErrorAction Stop

    Write-Host "✅ Success!" -ForegroundColor Green
    Write-Host "Response: $($response | ConvertTo-Json)" -ForegroundColor Gray
} catch {
    Write-Host "❌ Failed!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body: $responseBody" -ForegroundColor Red
    }
}
