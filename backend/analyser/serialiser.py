from rest_framework import serializers

class FinancialUploadSerializer(serializers.Serializer):
    file = serializers.FileField()
    file_type = serializers.ChoiceField(choices=['csv', 'xlsx', 'pdf'])

